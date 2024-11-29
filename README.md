# Ecwid Custom Widget Frontend

This project is a custom widget for the Ecwid online store. It includes:

- A **Recently Updated Products Widget** displayed on the cart page.
- A **Settings Page** where store owners can enable/disable the widget and configure its display.

The frontend is built using **Vue.js 3** with the Composition API and uses the Ecwid CSS Framework for styling. The application runs in a Docker container.

---

## **Features**

### Recently Updated Products Widget

- Displays recently updated products below the cart page (mocked data due to lack of backend/API integration).
- Includes:
  - Add-to-cart buttons (not functional due to missing API).
  - Links to product details (mocked).

### Settings Page

- Toggle the widget on/off.
- Adjust the number of products displayed.

---

## **Technologies Used**

- **Frontend**: Vue.js 3, TypeScript, HTML/CSS.
- **Containerization**: Docker Compose.

---

## **Getting Started**

### Prerequisites

- Docker and Docker Compose installed on your machine.

### Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>

   ```

2. **Build and Run the Docker Compose Stack**:

   ```bash
   docker compose up -d
   ```

3. **Access the Application**:
   Open your web browser and navigate to: `http://localhost:8080`.
