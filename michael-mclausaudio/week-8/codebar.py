class Member():
    def __init__(self, full_name):
        self.full_name = full_name

    def introduce(self):
        print(f"Hi, my name is {self.full_name.split()[0]}")


class Student(Member):
    def __init__(self, full_name, reason):
        Member.__init__(self, full_name)
        self.reason = reason


class Instructor(Member):

    def __init__(self, full_name, bio, skills=None):
        Member.__init__(self, full_name)
        self.bio = bio
        # self.skills = []
        self.skills = skills
        if self.skills == None:
            self.skills = []

    def add_skill(self, new_skill):
        self.skills.append(new_skill)


class Workshop():
    def __init__(self, date, subject):
        self.date = date
        self.subject = subject
        self.instructors = []
        self.student_roster = []

    def add_participant(self, participant):
        if participant.__class__ == Student:
            self.student_roster.append(participant)
        elif participant.__class__ == Instructor:
            self.instructors.append(participant)

    def print_details(self):
        print('Students')
        for i, s in enumerate(self.student_roster):
            print(f"{i+1}. {s.full_name} - {s.reason}")
        print('Instructors')
        for i, t in enumerate(self.instructors):
            print(f"{i+1}. {t.full_name} - {', '.join(t.skills)}")
            print(f"    {t.bio}")


workshop = Workshop("12/03/2014", "Shutl")

jane = Student(
    "Jane Doe", "I am trying to learn programming and need some help")
lena = Student("Lena Smith", "I am really excited about learning to program!")
vicky = Instructor("Vicky Python", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("JavaScript")
nicole = Instructor(
    "Nicole McMillan", "I have been programming for 5 years in Python and want to spread the love")
nicole.add_skill("Python")

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
workshop.print_details()
