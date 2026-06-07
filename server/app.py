from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from analyzer.resume_parser import ResumeParser
from analyzer.ats_analyzer import ATSAnalyzer

load_dotenv()

app = Flask(__name__)
CORS(app)

resume_parser = ResumeParser()
ats_analyzer = ATSAnalyzer()

@app.route('/api/analyze', methods=['POST'])
def analyze_resume():
    try:
        data = request.get_json()
        resume_text = data.get('resume', '')
        
        if not resume_text:
            return jsonify({'error': 'No resume provided'}), 400
        
        # Parse resume
        parsed_resume = resume_parser.parse(resume_text)
        
        # Analyze for ATS
        analysis = ats_analyzer.analyze(parsed_resume, resume_text)
        
        return jsonify(analysis), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
