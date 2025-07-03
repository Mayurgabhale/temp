const card = document.createElement("div");
card.className = "device-card";
card.dataset.type = deviceType;
card.dataset.status = currentStatus;
card.dataset.city = city;
card.setAttribute("data-ip", deviceIP);

// Icon per device type
const iconMap = {
    cameras: "fas fa-video",
    archivers: "fas fa-database",
    controllers: "fas fa-id-card",
    servers: "fas fa-server",
    default: "fas fa-microchip"
};

const deviceIcon = iconMap[deviceType] || iconMap.default;

// Status label background
const statusClass = (currentStatus === "online") ? "status-online" : "status-offline";

// Build HTML content
card.innerHTML = `
    <div class="device-header">
        <i class="${deviceIcon} device-icon"></i>
        <h3 class="device-name">${device.cameraname || device.controllername || device.archivername || device.servername || "Unknown Device"}</h3>
    </div>
    <p><strong>Type:</strong> ${deviceType.toUpperCase()}</p>
    <p><strong>IP:</strong> <span class="device-ip">${deviceIP}</span></p>
    <p><strong>Location:</strong> ${device.location || "N/A"}</p>
    <p><strong>City:</strong> ${city}</p>
    <p class="device-status-label ${statusClass}">
        ${currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
        <span class="status-dot"></span>
    </p>
    <button class="details-button" onclick="showModal('${device.cameraname || device.controllername || device.archivername || device.servername || "Unknown Device"}', '${deviceIP}', '${device.location || "N/A"}', '${currentStatus}', '${city}')">
        View Details
    </button>
`;