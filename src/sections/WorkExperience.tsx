"use client";
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      role: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      fromDate: "Jan 2022",
      toDate: "Present",
      points: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 5 junior developers and conducted technical interviews",
        "Built real-time analytics dashboard using React and Node.js"
      ],
      color: "#667eea",
      bgColor: "#f7fafc"
    },
    {
      company: "StartupHub",
      role: "Frontend Developer",
      location: "Austin, TX",
      fromDate: "Jun 2020",
      toDate: "Dec 2021",
      points: [
        "Developed responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Optimized application performance resulting in 40% faster load times",
        "Integrated third-party APIs and payment gateways"
      ],
      color: "#f093fb",
      bgColor: "#fef7ff"
    },
    {
      company: "Digital Solutions Ltd.",
      role: "Junior Web Developer",
      location: "New York, NY",
      fromDate: "Aug 2019",
      toDate: "May 2020",
      points: [
        "Built and maintained client websites using HTML, CSS, and JavaScript",
        "Worked closely with senior developers to learn best practices",
        "Participated in agile development processes and daily standups",
        "Contributed to open-source projects and company code reviews"
      ],
      color: "#4facfe",
      bgColor: "#f0f9ff"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-lg">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My journey through the tech industry, building amazing products and growing as a developer
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-purple-600 font-medium">Professional Timeline</span>
            <Sparkles className="w-5 h-5 text-purple-500" />
          </div>
        </div>

        {/* Timeline */}
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: `linear-gradient(135deg, ${exp.bgColor} 0%, #ffffff 100%)`,
                color: '#2d3748',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                border: `2px solid ${exp.color}20`,
                borderRadius: '20px',
                padding: '2rem'
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${exp.color}40`
              }}
              date={
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center space-x-2 text-gray-700 font-semibold">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.fromDate} - {exp.toDate}</span>
                  </div>
                </div>
              }
              iconStyle={{
                background: `linear-gradient(135deg, ${exp.color} 0%, ${exp.color}dd 100%)`,
                color: '#fff',
                boxShadow: `0 0 0 4px ${exp.color}20, inset 0 2px 0 rgba(255,255,255,.08), 0 3px 0 4px rgba(0,0,0,.05), 0 8px 17px rgba(0,0,0,.2)`
              }}
              icon={<Briefcase />}
            >
              {/* Company Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {exp.company}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h4 className="text-lg font-semibold text-purple-600">
                    {exp.role}
                  </h4>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                  Key Achievements
                </h5>
                {exp.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: exp.color }}
                    ></div>
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4">
                <div 
                  className="w-3 h-3 rounded-full opacity-30"
                  style={{ backgroundColor: exp.color }}
                ></div>
              </div>
              <div className="absolute bottom-4 right-6">
                <div 
                  className="w-2 h-2 rounded-full opacity-20"
                  style={{ backgroundColor: exp.color }}
                ></div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-sm">This is where my journey continues...</span>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vertical-timeline::before {
          background: linear-gradient(to bottom, #667eea, #f093fb, #4facfe) !important;
          width: 4px !important;
        }
        
        .vertical-timeline-element-date {
          color: #4a5568 !important;
          font-weight: 600 !important;
        }
        
        @media only screen and (max-width: 1170px) {
          .vertical-timeline-element-date {
            color: #4a5568 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkExperience;