// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration here
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Function to handle user logout
function logout() {
    auth.signOut()
        .then(() => {
            console.log("User logged out successfully.");
            window.location.href = "login.html"; // Redirect to login page after logout
        })
        .catch((error) => {
            console.error("Error logging out: ", error);
            alert("Failed to logout. Please try again.");
        });
}

// Function to update account settings
function updateAccountSettings() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Update account settings in Firebase (assuming you have a users collection)
    const currentUser = auth.currentUser;
    if (currentUser) {
        currentUser.updateProfile({ displayName: username })
            .then(() => {
                console.log("Username updated successfully.");
            })
            .catch((error) => {
                console.error("Error updating username: ", error);
            });

        currentUser.updateEmail(email)
            .then(() => {
                console.log("Email updated successfully.");
            })
            .catch((error) => {
                console.error("Error updating email: ", error);
            });

        currentUser.updatePassword(password)
            .then(() => {
                console.log("Password updated successfully.");
            })
            .catch((error) => {
                console.error("Error updating password: ", error);
            });
    }
}

// Function to update address book settings (assuming you have a userAddresses collection)
function updateAddressBook() {
    // Get address book data from form fields
    const addressData = {
        // Add address data fields here (e.g., name, street, city, zip code, etc.)
    };

    // Update or add the address in the Firebase collection
    const currentUser = auth.currentUser;
    if (currentUser) {
        db.collection("userAddresses").doc(currentUser.uid).set(addressData)
            .then(() => {
                console.log("Address book updated successfully.");
            })
            .catch((error) => {
                console.error("Error updating address book: ", error);
            });
    }
}

// Function to update country selection (assuming you have a users collection)
function updateCountry() {
    const selectedCountry = document.getElementById("country").value;

    // Update country in the Firebase user document
    const currentUser = auth.currentUser;
    if (currentUser) {
        db.collection("users").doc(currentUser.uid).update({
            country: selectedCountry
        })
            .then(() => {
                console.log("Country updated successfully.");
            })
            .catch((error) => {
                console.error("Error updating country: ", error);
            });
    }
}

// Function to update currency selection (assuming you have a users collection)
function updateCurrency() {
    const selectedCurrency = document.getElementById("currency").value;

    // Update currency in the Firebase user document
    const currentUser = auth.currentUser;
    if (currentUser) {
        db.collection("users").doc(currentUser.uid).update({
            currency: selectedCurrency
        })
            .then(() => {
                console.log("Currency updated successfully.");
            })
            .catch((error) => {
                console.error("Error updating currency: ", error);
            });
    }
}

// Function to update language selection (assuming you have a users collection)
function updateLanguage() {
    const selectedLanguage = document.getElementById("language").value;

    // Update language in the Firebase user document
    const currentUser = auth.currentUser;
    if (currentUser) {
        db.collection("users").doc(currentUser.uid).update({
            language: selectedLanguage
        })
            .then(() => {
                console.log("Language updated successfully.");
            })
            .catch((error) => {
                console.error("Error updating language: ", error);
            });
    }
}

// Function to update notification settings (assuming you have a users collection)
function updateNotificationSettings() {
    const emailNotifications = document.getElementById("emailNotifications").checked;
    const pushNotifications = document.getElementById("pushNotifications").checked;

    // Update notification settings in the Firebase user document
    const currentUser = auth.currentUser;
    if (currentUser) {
        db.collection("users").doc(currentUser.uid).update({
            emailNotifications: emailNotifications,
            pushNotifications: pushNotifications
        })
            .then(() => {
                console.log("Notification settings updated successfully.");
            })
            .catch((error) => {
                console.error("Error updating notification settings: ", error);
            });
    }
}
function toggleAccountSettings() {
    const settingsDiv = document.querySelector('.settings');
    if (settingsDiv.style.display === 'none') {
        settingsDiv.style.display = 'block';
    } else {
        settingsDiv.style.display = 'none';
    }
}

function updateAccountSettings() {
    // Your code to handle updating the account settings goes here
}