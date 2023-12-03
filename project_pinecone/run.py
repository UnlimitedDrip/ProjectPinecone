#run.py
# app.py
from flask import Flask, render_template, request
from Prototype import display

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/create')
def create():
    return render_template('create.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/display', methods=['POST'])
def display_route():

    if request.method == 'POST':
        course = request.form.get('Course')
        last_name = request.form.get('Last')

        # Call the display function from Prototype.py and saves the results in result
        result = display(course, last_name)

        if "error" in result:
            return render_template('index.html', error=result["error"])

        # rerenders the template, but now with result allowing our page to print the results.
        return render_template('index.html', result=result)
    
    # This should take care of cases where no input is given
    return render_template('index.html')



if __name__ == '__main__':
    app.run(debug=True)