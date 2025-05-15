import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {


  return (
    <footer className="bg-gray-50 pt-12 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Find Events */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Find Events</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-gray-600 hover:text-sydney-purple">All Events</Link></li>
              <li><Link to="/categories" className="text-gray-600 hover:text-sydney-purple">By Category</Link></li>
              <li><Link to="/venues" className="text-gray-600 hover:text-sydney-purple">By Venue</Link></li>
              <li><Link to="/today" className="text-gray-600 hover:text-sydney-purple">Today's Events</Link></li>
            </ul>
          </div>

          {/* For Organizers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Organizers</h3>
            <ul className="space-y-2">
              <li><Link to="/list-event" className="text-gray-600 hover:text-sydney-purple">List Your Event</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-sydney-purple">Pricing</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-sydney-purple">Resources</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-sydney-purple">FAQ</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-sydney-purple">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-sydney-purple">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-sydney-purple">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-sydney-purple">Blog</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-sydney-purple">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sydney-purple">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sydney-purple">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sydney-purple">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© 2025 Sorabh Gwala. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/terms" className="hover:text-sydney-purple">Terms</Link>
            <Link to="/privacy" className="hover:text-sydney-purple">Privacy</Link>
            <Link to="/cookies" className="hover:text-sydney-purple">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
