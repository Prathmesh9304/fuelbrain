import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FuelBrainLogo } from "../assets";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img
                src={FuelBrainLogo}
                alt="FuelBrain Logo"
                className="w-10 h-10"
              />
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Fuel<span className="text-brand-blue">Brain</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Empowering children aged 8-16 with robust cognitive, analytical,
              and problem-solving skills through gamified education.
            </p>
          </div>
          <div>
            <h3 className="text-slate-900 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-orange transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-orange transition-colors"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-slate-900 font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-blue" />
                +91 77096 63121
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-blue" />
                fuelbrain111@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-blue" />{" "}
                Mangaon, Maharashtra, 402103
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 text-sm text-center text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} FuelBrain. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
