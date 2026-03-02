// public/app.js

// User Profiles Management
class UserProfile {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.healthRecords = [];
        this.medications = [];
        this.appointments = [];
    }

    addHealthRecord(record) {
        this.healthRecords.push(record);
    }

    addMedication(medication) {
        this.medications.push(medication);
    }

    addAppointment(appointment) {
        this.appointments.push(appointment);
    }
}

// API Calls
async function fetchHealthRecords(userId) {
    try {
        const response = await fetch(`/api/users/${userId}/health-records`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching health records:', error);
    }
}

async function fetchMedications(userId) {
    try {
        const response = await fetch(`/api/users/${userId}/medications`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching medications:', error);
    }
}

async function fetchAppointments(userId) {
    try {
        const response = await fetch(`/api/users/${userId}/appointments`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching appointments:', error);
    }
}

// Modal Interactions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Event Listeners
document.getElementById('openProfileModal').addEventListener('click', () => openModal('profileModal'));
document.getElementById('closeProfileModal').addEventListener('click', () => closeModal('profileModal'));