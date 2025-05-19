"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faDatabase, 
  faExclamationTriangle, 
  faSearch 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter, 
  faLinkedin, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';

const App: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        animation: false,
        title: {
          text: "Financial Impact of MariaDB Attacks",
          left: "center",
          textStyle: {
            color: "#333",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: ["2021", "2022", "2023", "2024", "2025"],
        },
        yAxis: {
          type: "value",
          name: "Loss in Million $",
        },
        series: [
          {
            data: [2.1, 3.5, 4.8, 6.2, 7.5],
            type: "line",
            smooth: true,
            lineStyle: {
              color: "#dc2626",
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(220, 38, 38, 0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(220, 38, 38, 0.05)",
                  },
                ],
              },
            },
          },
        ],
      };
      chart.setOption(option);
    }
  }, []);

  return (
    <div className="min-h-[1024px] bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-2xl" />
            <h1 className="text-2xl font-bold">MariaDB Security Alert</h1>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <a href="#" className="hover:text-red-600 cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 cursor-pointer">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 cursor-pointer">
                  Prevention
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20dramatic%20cybersecurity%20visualization%20showing%20digital%20data%20streams%20and%20a%20lock%20being%20broken%2C%20dark%20theme%20with%20red%20warning%20elements%2C%20modern%203D%20rendering%20style%20with%20clean%20minimal%20background&width=1440&height=500&seq=1&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50">
          <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-5xl font-bold mb-6">
                Protect Your Database from MariaDB Injection Attacks
              </h2>
              <p className="text-xl mb-8">
                Don&apos;t let cybercriminals drain your accounts. Learn how to
                secure your database against sophisticated injection attacks.
              </p>
              <Button className="!rounded-button bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg cursor-pointer whitespace-nowrap">
                Learn How to Protect Yourself
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Information Blocks */}
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-3 gap-8">
          <Card className="p-8">
            <FontAwesomeIcon icon={faDatabase} className="text-red-600 text-3xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              What is MariaDB Injection?
            </h3>
            <p className="text-gray-600">
              MariaDB injection is a critical security vulnerability where
              attackers manipulate database queries to gain unauthorized access
              to your sensitive data and financial information.
            </p>
          </Card>
          <Card className="p-8">
            <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-600 text-3xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">How It Affects You</h3>
            <p className="text-gray-600">
              Victims of MariaDB injection attacks face devastating financial
              losses, data breaches, and long-term damage to their business
              operations and reputation.
            </p>
          </Card>
          <Card className="p-8">
            <FontAwesomeIcon icon={faSearch} className="text-red-600 text-3xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Warning Signs</h3>
            <p className="text-gray-600">
              Learn to identify suspicious database activities, unexpected query
              behaviors, and other telltale signs that your system might be
              compromised.
            </p>
          </Card>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            The Growing Threat of Database Attacks
          </h2>
          <div ref={chartRef} className="w-full h-[400px]"></div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-12">Real Impact Stories</h2>
        <div className="grid grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="h-48 mb-6 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=A%20professional%20looking%20office%20environment%20with%20worried%20business%20people%20looking%20at%20computer%20screens%2C%20showing%20concern%20about%20cybersecurity%2C%20modern%20corporate%20setting%20with%20minimal%20background&width=400&height=200&seq=2&orientation=landscape"
                alt="Case Study 1"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">
              E-commerce Platform Breach
            </h3>
            <p className="text-gray-600 mb-4">
              A major online retailer lost $2.5M in 24 hours due to a
              sophisticated MariaDB injection attack that compromised customer
              payment data.
            </p>
            <Button className="!rounded-button bg-red-600 hover:bg-red-700 text-white cursor-pointer whitespace-nowrap">
              Read Full Story
            </Button>
          </Card>
          <Card className="p-8">
            <div className="h-48 mb-6 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=A%20modern%20financial%20district%20office%20building%20exterior%20with%20cybersecurity%20concept%20overlay%2C%20corporate%20architecture%20with%20minimal%20background&width=400&height=200&seq=3&orientation=landscape"
                alt="Case Study 2"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">
              Financial Institution Attack
            </h3>
            <p className="text-gray-600 mb-4">
              A regional bank&apos;s database breach led to $5M in fraudulent
              transactions and affected over 10,000 customer accounts.
            </p>
            <Button className="!rounded-button bg-red-600 hover:bg-red-700 text-white cursor-pointer whitespace-nowrap">
              Read Full Story
            </Button>
          </Card>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Protected</h2>
          <p className="mb-8">
            Subscribe to our security alerts and receive real-time updates about
            new threats and protection measures.
          </p>
          <div className="flex gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-96 bg-white text-gray-900 border-none"
            />
            <Button className="!rounded-button bg-red-600 hover:bg-red-700 cursor-pointer whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 py-12">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Emergency Contact</h3>
              <p className="text-gray-600">24/7 Security Hotline</p>
              <p className="text-red-600">+1 (888) 123-4567</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-red-600 cursor-pointer">
                    Security Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 cursor-pointer">
                    Best Practices
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 cursor-pointer">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-red-600 cursor-pointer">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 cursor-pointer">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2025 MariaDB Security Alert. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
