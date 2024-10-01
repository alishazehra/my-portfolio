var _a;
function showMore() {
    alert("More information about my projects will be available soon!");
}
(_a = document.querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert("Thank you for your message! I will get back to you shortly.");
    this.reset(); // Reset the form fields
});
