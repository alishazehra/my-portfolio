function showMore(): void {
    alert("More information about my projects will be available soon!");
}

document.querySelector('form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert("Thank you for your message! I will get back to you shortly.");
    this.reset(); // Reset the form fields
});

