import React from 'react';
import { Course } from '../../types/Course';
import { courses } from '../../assets/data';  
import './CourseSection.scss';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { CiVideoOn } from "react-icons/ci";

const CourseSection: React.FC = () => {
    return (
        <section className="course-section">
            <h2 data-aos="fade-down" className="course-section-title">Courses</h2>
            <h5 data-aos="fade-down" className="course-section-description">Enlighten Your Journey with Authentic Islamic Knowledge</h5>
            <div data-aos="fade-right" className="course-section-grid">
                {courses.map((course: Course) => (
                    <div key={course.id} className="course-card">
                        <img
                            className="course-card-thumbnail"
                            src={course.thumbnail}
                            alt={`${course.title} thumbnail`}
                        />
                        <div className="course-card-content">
                            <h3 className="course-card-title">{course.title}</h3>
                            <p className="course-card-description">{course.description}</p>
                            <div className="course-card-info">
                                <span className="course-card-info-item"><AiOutlineClockCircle />22hr 30min</span>
                                <span className="course-card-info-item"><CiVideoOn /> 34 Courses</span>
                            </div>
                            <button className="course-card-button">Join Course</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="see-more-button">
                See More <span className="see-more-arrow">&gt;</span>
            </div>
        </section>
    );
}

export default CourseSection;
