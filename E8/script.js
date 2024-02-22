document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        return alert('Please select a file');
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to upload file');
        }

        const data = await response.json();
        displayValidationResults(data.validation_errors);
    } catch (error) {
        console.error(error);
        alert('An error occurred');
    }
});

function displayValidationResults(errors) {
    const validationResults = document.getElementById('validationResults');
    validationResults.innerHTML = '';

    if (errors.length === 0) {
        validationResults.innerText = 'No validation errors found';
        return;
    }

    const ul = document.createElement('ul');
    errors.forEach(error => {
        const li = document.createElement('li');
        li.innerText = error;
        ul.appendChild(li);
    });
    validationResults.appendChild(ul);
}
