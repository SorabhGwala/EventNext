import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useAppContext } from '@/Context/AppContext';

export const EmailCaptureModal = ({ isOpen, onClose, eventTitle }) => {
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('email');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { selectedLocation } = useAppContext();
  const navigate = useNavigate();

  const sendOtp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!selectedLocation) {
      toast.error('Location is not selected');
      setIsSubmitting(false);
      return;
    }


    const payload = { email, optIn, eventTitle, location: selectedLocation };
   

    try {
      const res = await fetch('https://eventnext.onrender.com/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to send OTP');

      toast.success('OTP sent to your email');
      setStep('otp');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send OTP');
    } finally {
      setIsSubmitting(false);
    }
  };

    const verifyOtp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://eventnext.onrender.com/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, eventTitle, location: selectedLocation }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'OTP verification failed');

      toast.success('OTP verified. Redirecting...');
         navigate('/')
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'OTP verification failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogOverlay className="fixed inset-0 z-50 bg-black/50" />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>

          <DialogTitle>Get tickets for {eventTitle}</DialogTitle>
          <DialogDescription>
            {step === 'email'
              ? 'Enter your email to receive a one-time passcode (OTP).'
              : 'Check your email and enter the OTP to continue.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={step === 'email' ? sendOtp : verifyOtp} className="space-y-6 py-4">
          {step === 'email' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="opt-in"
                  checked={optIn}
                  onCheckedChange={(checked) => setOptIn(!!checked)}
                />
                <Label htmlFor="opt-in" className="text-sm">
                  {`Send me updates about events in ${selectedLocation}`}
                </Label>
              </div>
            </>
          )}

          {step === 'otp' && (
            <div className="space-y-2">
              <Label htmlFor="otp">Enter OTP</Label>
              <Input
                id="otp"
                type="text"
                placeholder="6-digit code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
          )}

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {isSubmitting
                ? 'Processing...'
                : step === 'email'
                ? 'Send OTP'
                : 'Verify & Continue'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
