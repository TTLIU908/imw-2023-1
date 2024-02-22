from flask import Flask, request, jsonify
from validate.format import check_file_format

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        content = file.read().decode('utf-8').split('\n')
        validation_errors = check_file_format(lines=content)
        return jsonify({'validation_errors': validation_errors})

if __name__ == '__main__':
    app.run(debug=True)
