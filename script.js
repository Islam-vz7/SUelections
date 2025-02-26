function submitVote() {
  // Example vote submission logic
  const undergradVote = 'Islam Elserougi';  // Undergraduate vote
  const postgradVote = 'Faisal';  // Postgraduate vote
  
  // Store votes in localStorage
  localStorage.setItem('undergradVote', undergradVote);
  localStorage.setItem('postgradVote', postgradVote);

  // Redirect to a new page after vote submission
  window.location.href = "confirmation.html";  // Replace with your desired page URL
}
