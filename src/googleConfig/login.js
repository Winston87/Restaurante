function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "353981456004-ie3pv8dh1gp3592hq0nesm4j6kpuqo0d.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }
