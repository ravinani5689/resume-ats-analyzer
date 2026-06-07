class ATSAnalyzer:
    """Analyze resume for ATS compatibility"""
    
    def __init__(self):
        self.important_keywords = {
            'technical': ['python', 'javascript', 'java', 'sql', 'api', 'database', 'cloud'],
            'soft_skills': ['leadership', 'communication', 'teamwork', 'problem-solving'],
            'certifications': ['aws', 'azure', 'certified', 'certification']
        }
    
    def analyze(self, parsed_resume, original_text):
        """Perform ATS analysis"""
        ats_score = self.calculate_ats_score(parsed_resume, original_text)
        issues = self.identify_issues(parsed_resume)
        recommendations = self.get_recommendations(parsed_resume, issues)
        missing_skills = self.get_missing_skills(parsed_resume)
        
        return {
            'atsScore': ats_score,
            'matchScore': min(100, ats_score + 10),
            'keywordCount': len(parsed_resume['skills']),
            'issues': issues,
            'recommendations': recommendations,
            'foundSkills': parsed_resume['skills'],
            'missingSkills': missing_skills,
            'wordCount': parsed_resume['words'],
            'hasExperience': parsed_resume['experience'],
            'hasEducation': parsed_resume['education']
        }
    
    def calculate_ats_score(self, parsed_resume, original_text):
        """Calculate ATS compatibility score"""
        score = 50
        
        # Check for essential sections
        if parsed_resume['experience']:
            score += 15
        if parsed_resume['education']:
            score += 15
        
        # Check word count (ideal: 400-800 words)
        if 400 <= parsed_resume['words'] <= 800:
            score += 10
        
        # Check skills
        if len(parsed_resume['skills']) >= 5:
            score += 10
        
        return min(100, score)
    
    def identify_issues(self, parsed_resume):
        """Identify issues in resume"""
        issues = []
        
        if not parsed_resume['experience']:
            issues.append('Missing work experience section')
        
        if not parsed_resume['education']:
            issues.append('Missing education section')
        
        if parsed_resume['words'] < 300:
            issues.append('Resume is too short (less than 300 words)')
        
        if parsed_resume['words'] > 1000:
            issues.append('Resume is too long (more than 1000 words)')
        
        if len(parsed_resume['skills']) < 5:
            issues.append('Not enough relevant skills listed')
        
        return issues
    
    def get_recommendations(self, parsed_resume, issues):
        """Get recommendations to improve resume"""
        recommendations = [
            'Use standard section headers (Experience, Education, Skills)',
            'Include relevant keywords from job description',
            'Quantify achievements with metrics and numbers',
            'Use active voice and action verbs'
        ]
        
        if not parsed_resume['experience']:
            recommendations.insert(0, 'Add a dedicated Work Experience section')
        
        if not parsed_resume['education']:
            recommendations.insert(1, 'Add your educational background')
        
        if parsed_resume['words'] < 300:
            recommendations.append('Expand your resume with more details')
        
        return recommendations[:5]  # Return top 5
    
    def get_missing_skills(self, parsed_resume):
        """Identify missing important skills"""
        all_important = ['Docker', 'AWS', 'Python', 'JavaScript', 'SQL', 'Git', 'REST API']
        found = [s.lower() for s in parsed_resume['skills']]
        
        missing = [s for s in all_important if s.lower() not in found]
        return missing[:3]  # Return top 3 missing
