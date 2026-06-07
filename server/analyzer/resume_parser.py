import os
import re
from collections import Counter

class ResumeParser:
    """Parse resume text and extract key information"""
    
    def __init__(self):
        self.skills_database = [
            'python', 'javascript', 'java', 'c++', 'c#', 'php', 'ruby', 'go', 'rust', 'kotlin',
            'react', 'vue', 'angular', 'node.js', 'express', 'django', 'flask', 'spring',
            'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'jenkins', 'gitlab', 'github',
            'sql', 'mongodb', 'postgresql', 'mysql', 'redis', 'elasticsearch',
            'machine learning', 'deep learning', 'nlp', 'computer vision', 'tensorflow', 'pytorch',
            'agile', 'scrum', 'git', 'rest api', 'graphql', 'microservices'
        ]
    
    def parse(self, resume_text):
        """Parse resume and extract structured data"""
        resume_text_lower = resume_text.lower()
        
        return {
            'raw_text': resume_text,
            'length': len(resume_text),
            'words': len(resume_text.split()),
            'skills': self.extract_skills(resume_text_lower),
            'experience': self.extract_experience(resume_text),
            'education': self.extract_education(resume_text),
            'contact_info': self.extract_contact_info(resume_text)
        }
    
    def extract_skills(self, text_lower):
        """Extract skills from resume"""
        found_skills = []
        for skill in self.skills_database:
            if skill in text_lower:
                found_skills.append(skill.title())
        return list(set(found_skills))
    
    def extract_experience(self, text):
        """Extract work experience"""
        experience_keywords = ['experience', 'work', 'employment', 'position', 'role']
        for keyword in experience_keywords:
            if keyword.lower() in text.lower():
                return True
        return False
    
    def extract_education(self, text):
        """Extract education information"""
        education_keywords = ['bachelor', 'master', 'phd', 'degree', 'university', 'college']
        for keyword in education_keywords:
            if keyword.lower() in text.lower():
                return True
        return False
    
    def extract_contact_info(self, text):
        """Extract contact information"""
        email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
        phone_pattern = r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b'
        
        emails = re.findall(email_pattern, text)
        phones = re.findall(phone_pattern, text)
        
        return {
            'emails': emails,
            'phones': phones
        }
