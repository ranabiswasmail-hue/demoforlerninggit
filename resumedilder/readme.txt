def build_resume():
    """Simple resume builder"""
    
    resume = {
        "name": input("Enter your name: "),
        "email": input("Enter your email: "),
        "phone": input("Enter your phone number: "),
        "summary": input("Enter a professional summary: "),
        "experience": [],
        "education": [],
        "skills": []
    }
    
    # Add experience
    while input("Add work experience? (y/n): ").lower() == 'y':
        resume["experience"].append({
            "company": input("Company name: "),
            "position": input("Position: "),
            "duration": input("Duration: "),
            "description": input("Job description: ")
        })
    
    # Add education
    while input("Add education? (y/n): ").lower() == 'y':
        resume["education"].append({
            "school": input("School/University: "),
            "degree": input("Degree: "),
            "year": input("Graduation year: ")
        })
    
    # Add skills
    skills_input = input("Enter skills (comma-separated): ")
    resume["skills"] = [skill.strip() for skill in skills_input.split(",")]
    
    return resume

def print_resume(resume):
    """Format and display resume"""
    print("\n" + "="*50)
    print(f"RESUME - {resume['name']}")
    print("="*50)
    print(f"Email: {resume['email']} | Phone: {resume['phone']}\n")
    print(f"PROFESSIONAL SUMMARY\n{resume['summary']}\n")
    print("EXPERIENCE")
    for exp in resume["experience"]:
        print(f"  {exp['position']} at {exp['company']} ({exp['duration']})\n  {exp['description']}\n")
    print("EDUCATION")
    for edu in resume["education"]:
        print(f"  {edu['degree']} from {edu['school']} ({edu['year']})\n")
    print("SKILLS")
    print(f"  {', '.join(resume['skills'])}\n")

if __name__ == "__main__":
    resume = build_resume()
    print_resume(resume)