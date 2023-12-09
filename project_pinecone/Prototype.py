import mysql.connector
from mysql.connector import errorcode
from config import Config

#Prototype.py
class ClassData:
    def __init__(self, class_name, section, instructor_last, instructor_first, A, B, C, D, F, W, total):
        self.class_name = class_name
        self.section = section
        self.instructor_last = instructor_last
        self.instructor_first = instructor_first
        self.A = A
        self.B = B
        self.C = C
        self.D = D
        self.F = F
        self.W = W
        self.total = total

class InstructorInfo:
    def __init__(self, first_name, last_name, rating, difficulty, link, comment1, comment2, comment3):
        self.first_name = first_name
        self.last_name = last_name
        self.rating = rating
        self.difficulty = difficulty
        self.link = link
        self.comment1 = comment1
        self.comment2 = comment2
        self.comment3 = comment3

def display(course, last_name):
    # array for comments
    #comm_arr = [None, None, None]
    db_connection = create_database_connection()

    prof_info = fetch_instructor_info_by_last_name(last_name, db_connection)
    course_info = fetch_class_data_by_class_name(course, db_connection)

    db_connection.close()

    #prof_info = find_professor_by_last_name(last_name)
    #course_info = find_course_name(course)

    if prof_info and course_info:
        # get comments
        #comm_arr = get_prof_comments(prof_info, comm_arr)


        result = [prof_info, course_info, find_course_average(course_info), find_course_withdrawal_rate(course_info), find_course_diff(course_info)]
        return result 
    else:
        return {"error": "Professor or course not found."}


def find_course_diff(course_info):
    withdrawal_rate = find_course_withdrawal_rate(course_info)
    course_avg = find_course_average(course_info)

    if course_avg < 70.00 or withdrawal_rate > 33.00:
        return "According to the Course Average or the Withdrawal Rate, this course may be a bit difficult."
    return "This course seems to not have any indications that it will be abnormally difficult."


def find_course_average(course_info):
    # sets variables to 0
    total_students = 0
    ABC_Val = 0
    #iterates through the whole list of objects 
    for index in range(0, len(course_info)):
        #adds A's, B's and C's to a variable from each index of the list of objects and also adds the number of students to another variable
        total_students += course_info[index].total
        ABC_Val = ABC_Val + (course_info[index].A + course_info[index].B + course_info[index].C)
    #retusn the number of students that passed with A's, B's, C's divided by the total number of sutndets who took this class * 100
    return round((ABC_Val / total_students) * 100, 2)


def find_course_withdrawal_rate(course_info):
    #sets variables to 0
    withdrawals = 0
    TotalS = 0
    #iterates through the whole list adding Withdrawls and the total number of students in each class form the object
    for index in range(0, len(course_info)):
        TotalS += course_info[index].total
        withdrawals += course_info[index].W
    # returns the # of withdrawls/Total # of students * 100
    return round((withdrawals/TotalS) * 100, 2)


    
def create_database_connection():
    #Connets to data base
    connection = mysql.connector.connect(**Config.dbinfo())
    return connection

def fetch_instructor_info_by_last_name(last_name, connection):
    cursor = connection.cursor(dictionary=True)
    query = "SELECT * FROM InstructorInfo WHERE lastName = %s"
    cursor.execute(query, (last_name,))
    result = cursor.fetchone()  # gets a single row
    cursor.close()

    # If a result is found, create an InstructorInfo object
    if result:
        return InstructorInfo(
            result["firstName"],
            result["lastName"],
            result["rating"],
            result["difficulty"],
            result["link"],
            result["Comment1"],
            result["Comment2"],
            result["Comment3"]
        )
    else:
        return None

def fetch_class_data_by_class_name(class_name, connection):
    cursor = connection.cursor(dictionary=True)
    query = "SELECT * FROM ClassData WHERE Class = %s"
    cursor.execute(query, (class_name,))
    results = cursor.fetchall()  # Use fetchall() to get all rows as a list of dictionaries
    cursor.close()
    #creates a list for a list of objects
    class_data_list = []

    for result in results:
        class_data = ClassData(
            result["Class"],
            result["Section"],
            result["InstructorLast"],   
            result["InstructorFirst"],  
            result["A"],
            result["B"],
            result["C"],
            result["D"],
            result["F"],
            result["W"],
            result["Total"]
        )
        #appends the newly created object to the list of objects
        class_data_list.append(class_data)

    #returns a list of objects
    return class_data_list
