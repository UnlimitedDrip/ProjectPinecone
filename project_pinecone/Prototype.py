#Prototype.py
professors = [
    {
        "firstName": 'Ashish',
        "lastName": 'Amresh',
        "rating": '2.6/5',
        "difficulty": '1.9/5',
        "link": 'https://www.ratemyprofessors.com/professor/1356382',
        "comment1": "Overall he didn't do anything during the semester so far other than use other professor's material to 'teach' the course. Be prepared to figure everything out on your own. The videos he uses are generic, outdated, and most likely won't pertain to the OS you are running.",
        "comment2": "Barely taught. Just gave specific lessons from book. Cares more about research than teaching.",
        "comment3": "The video lectures are pretty good quality, the instructor in the videos is well qualified and speaks clearly. the coursework is moderate but not very difficult. Amresh was very responsive and I generally found this to be one of the better parts of the BSE program at ASU."
    },
    {
        "firstName": 'Paul',
        "lastName": 'Bakke',
        "rating": '3.4/5',
        "difficulty": '2.5/5',
        "link": 'https://www.ratemyprofessors.com/professor/2678904',
        "comment1": "Most of the stuff is going to be learned by doing the coding itself and his lectures are quite boring. You also don't know what grade you're actually going to get until near the end of the semester. I was thinking I ended the semester at a B- when I calculated it myself but ended with an A. If you put even 2 hours a week of effort you'll do fine.",
        "comment2": "He was very nice but he stopped teaching about a month after school had started. I started to not understand what was going on in the class. Showing up felt like it was useless after that; he posted his lectures online and everything was online. The lab was horrible though, very hard.",
        "comment3": "I felt like his lectures were there just to be there. Most of the learning is done on your own with the homework. He understands students are busy and provides very flexible hours which are very much appreciated. He is also always super helpful. The most unhelpful thing he's done was provide a required textbook. You will never touch it."
    },
    # ... (remaining professors)
]

course_data = [
    {
        "Class": "CS 105",
        "Section": 1,
        "Instructor": "Hocking,Toby D",
        "A": 81,
        "B": 42,
        "C": 19,
        "D": 15,
        "F": 52,
        "W": 37,
        "Total": 247
    },
    # ... (remaining course data)
]

def display(course, last_name):
    comm_arr = [None, None, None]

    prof_info = find_professor_by_last_name(last_name)
    course_info = find_course_name(course)

    # get comments
    comm_arr = get_prof_comments(prof_info, comm_arr)

    # You can format the result as needed
    result = f"Instructor: {prof_info['firstName']} {prof_info['lastName']}, " \
             f"Rating: {prof_info['rating']}, Difficulty: {prof_info['difficulty']}"

    return result


def get_prof_comments(prof_info, comm_arr):
    comm_arr[0] = prof_info["comment1"]
    comm_arr[1] = prof_info["comment2"]
    comm_arr[2] = prof_info["comment3"]

    return comm_arr


def find_course_diff(course_info):
    withdrawal_rate = find_course_withdrawal_rate(course_info)
    course_avg = find_course_average(course_info)

    if course_avg < 70.00 or withdrawal_rate > 33.00:
        return "According to the Course Average or the Withdrawal Rate, this course may be a bit difficult."
    return "This course seems to not have any indications that it will be abnormally difficult."


def find_course_average(course_info):
    return round(((course_info["A"] + course_info["B"] + course_info["C"]) / course_info["Total"]) * 100, 2)


def find_course_withdrawal_rate(course_info):
    return round((course_info["W"] / course_info["Total"]) * 100, 2)


def find_course_name(course_name_to_find):
    for course in course_data:
        if course["Class"] == course_name_to_find:
            return course
    return None


def find_professor_by_last_name(last_name_to_find):
    for prof in professors:
        if prof["lastName"] == last_name_to_find:
            return prof
    return None

