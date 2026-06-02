# 🌐 Meridian Trading Platform - Interactive Demo

**Professional commodity trading platform prototype** featuring client and internal portals with **interactive forms, real-time notifications, and enterprise-grade UX**.

![Status](https://img.shields.io/badge/Status-Production%20Ready-green) ![Demo](https://img.shields.io/badge/Demo-Running-blue) ![Testing](https://img.shields.io/badge/Testing-All%20Passed-success)

---

## 🎯 Overview

This is a fully functional **React + Vite** demo showcasing a modern commodity trading platform with three interconnected portals:

1. **Portal Launcher** - Central hub for portal selection
2. **Customer Portal** - Client dashboard with portfolio management & order placement
3. **Internal Portal** - CRM & ERP for sales and operations teams

### ✨ Key Features

✅ **Interactive Modal Form** - Create new commodity inquiries  
✅ **Toast Notifications** - Real-time approval feedback  
✅ **Kanban Board CRM** - Sales pipeline management  
✅ **ERP Logistics Table** - Shipment tracking & document management  
✅ **Responsive Design** - Dark & light theme support  
✅ **Professional Branding** - Copper/Amber Meridian brand colors  
✅ **Mock Data** - Realistic commodity trading scenarios  

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/goldenityinc/trading-website.git
cd meridian-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at: **`http://localhost:5173`**

---

## 📂 Project Structure

```
meridian-demo/
├── src/
│   ├── components/
│   │   ├── CustomerPortal.jsx          # Client dashboard with modal form
│   │   ├── InternalPortal.jsx          # CRM & ERP with toast notifications
│   │   ├── PortalLauncher.jsx          # Portal selection landing page
│   │   └── layout/
│   │       ├── SiteLayout.jsx
│   │       └── Footer.jsx
│   ├── mockData.js                     # Dummy data for all portals
│   ├── App.jsx                         # Main router & app entry
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── TESTING_SUMMARY.md                  # Full test coverage report
```

---

## 🎨 Portals & Features

### 1️⃣ Portal Launcher (`/portals`)
**Landing page for portal selection**

- Visual cards for Customer Portal & Internal Portal
- Feature highlights and descriptions
- Smooth navigation to both portals
- Professional branding with Meridian logo

```
URL: http://localhost:5173/portals
```

---

### 2️⃣ Customer Portal (`/customer-portal`)
**Professional dashboard for commodity trading clients**

#### Dashboard Elements:
- **Header** - Client name (Acme Corp), KYC status badge
- **Portfolio Summary** - Total contract value ($12.5M), allocation chart
- **Action Bar** - "Create New Order" button with interactive modal
- **Orders Table** - 5 active orders with status tracking

#### Interactive Modal Form 🎯
```javascript
// Triggered by "Create New Order" button
Features:
- Commodity dropdown (6 options)
- Volume input field
- Destination input field
- Cancel & Submit buttons
- Form validation
- Success alert with submitted data
- Auto-reset after submission
```

#### Dark Theme Styling
- Navy/Slate background (`#0f172a`)
- Copper accent buttons (`#ca8a04`)
- Professional enterprise design

---

### 3️⃣ Internal Portal (`/internal-portal`)
**CRM & ERP management for sales and operations teams**

#### Tab 1: CRM (Sales) 📊
- **Kanban Board** with 4 columns:
  - New Inquiry (2 leads)
  - KYC/KYB Process (2 leads)
  - Quotation Sent (1 lead)
  - Deal Closed (1 lead)
- **Lead Cards** with company info, commodity interest, contact details
- **Hover Effects** - Scale and shadow animations
- **Light Theme** - Professional data clarity

#### Tab 2: ERP (Logistics) 🚢
- **Shipment Table** with 6 active shipments
- **Columns:**
  - Shipment ID, Client, Commodity, Supplier
  - Vessel name & status (In Transit, At Port, Scheduled, etc.)
  - Document status (Complete, In Progress, Pending)
  - LC status (Confirmed, Pending, Review, Settled)
  - ETA and Action buttons

#### Interactive Toast Notification 🎯
```javascript
// Triggered by "Approve Docs" button on each row
Features:
- Toast appears at bottom-right (fixed position)
- Green background with checkmark
- Message format: "✓ Documents successfully approved for [SHIPMENT_ID]"
- Auto-dismisses after 3 seconds
- Smooth fade-in animation
- Can be triggered multiple times
```

---

## 📊 Mock Data Structure

### MOCK_CUSTOMER_PORTFOLIO
```javascript
{
  clientName: 'Acme Corp',
  totalVolume: '$12.5M',
  kycStatus: 'Verified',
  allocation: { crude_oil: 60, minerals: 40 },
  activeOrders: [ /* 5 orders */ ]
}
```

### MOCK_CRM_LEADS
```javascript
[
  {
    id: 'INQ-001',
    companyName: 'Global Energy Solutions',
    inquiryDate: '2025-06-01',
    commodityInterest: 'Crude Oil, Natural Gas',
    status: 'New Inquiry',
    volume: '10,000 bbls'
  },
  // ... 5 more leads
]
```

### MOCK_ERP_LOGISTICS
```javascript
[
  {
    shipmentId: 'SHIP-2025-001',
    client: 'Acme Corp',
    commodity: 'Crude Oil (Brent)',
    supplier: 'Saudi Aramco',
    quantity: '5,000 bbls',
    vesselStatus: 'In Transit',
    documentStatus: 'Complete',
    lc_status: 'Confirmed'
  },
  // ... 5 more shipments
]
```

---

## 🎬 Demo Scenarios

### Scenario 1: Customer Creates Order
```
1. Start at /portals (Portal Launcher)
2. Click "Launch Portal" on Customer Portal
3. View portfolio with $12.5M in active contracts
4. Click "Create New Order / Inquiry"
5. Modal opens with form
6. Fill in: Commodity (Crude Oil), Volume (10000 bbls), Destination (Singapore, SG)
7. Click "Submit Inquiry"
8. Success alert shows with data
✅ Complete! Order created.
```

### Scenario 2: Internal Team Approves Documents
```
1. Navigate to Internal Portal
2. Click "ERP (Logistics)" tab
3. View 6 active shipments
4. Click "Approve Docs" button on SHIP-2025-001
5. Toast notification appears: "✓ Documents successfully approved for SHIP-2025-001"
6. Toast auto-dismisses after 3 seconds
7. Click "Approve Docs" on another shipment
8. New toast appears with different shipment ID
✅ Complete! Document approval workflow demonstrated.
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI Framework |
| **Vite** | Build tool & dev server |
| **React Router v6** | Navigation & routing |
| **Tailwind CSS** | Styling & responsive design |
| **Lucide React** | Professional icons |
| **JavaScript (ES6+)** | Core logic |

---

## 🎨 Design System

### Colors
```css
/* Brand Colors */
--primary-copper: #ca8a04;      /* Buttons, accents */
--primary-navy: #0f172a;        /* Dark backgrounds */
--secondary-slate: #475569;     /* Neutral elements */

/* Status Colors */
--status-success: #10b981;      /* Green badges */
--status-warning: #f59e0b;      /* Yellow badges */
--status-error: #ef4444;        /* Red badges */
--status-info: #3b82f6;         /* Blue badges */
```

### Typography
- **Headings:** 600-700 weight, 1.5rem+
- **Body:** 400 weight, 1rem
- **Labels:** 500 weight, 0.875rem

### Spacing
- Grid: 4px base unit
- Padding: 1rem (16px) standard
- Gaps: 1rem between elements

---

## 📈 User Flows

### Flow 1: Customer Portal
```
Portal Launcher
    ↓
Customer Portal (Dark Theme)
    ├→ Portfolio Summary (View contracts)
    ├→ Allocation Chart (View distribution)
    └→ Create New Order (Modal Form)
        ├→ Select Commodity
        ├→ Enter Volume
        ├→ Enter Destination
        └→ Submit (Alert confirmation)
```

### Flow 2: Internal Portal
```
Portal Launcher
    ↓
Internal Portal (Light Theme)
    ├→ CRM Tab (Kanban Board)
    │   ├→ New Inquiry
    │   ├→ KYC Review
    │   ├→ Quotation Sent
    │   └→ Deal Closed
    └→ ERP Tab (Logistics Table)
        ├→ View Shipments
        ├→ Check Statuses
        └→ Approve Docs (Toast notification)
```

---

## ✅ Testing

### All Features Verified ✅
- Portal Launcher loads correctly
- Customer Portal displays all sections
- Modal form opens and validates
- Toast notifications trigger and disappear
- CRM Kanban cards display and hover
- ERP table renders with all statuses
- Navigation between portals works
- Responsive design verified

**See [TESTING_SUMMARY.md](./TESTING_SUMMARY.md) for detailed test coverage.**

---

## 🔄 Git Repository

```bash
# Repository URL
https://github.com/goldenityinc/trading-website.git

# Commits
1. Initial commit: Add trading platform demo with Customer Portal, Internal Portal, and Portal Launcher
2. Add comprehensive testing summary - all features verified and working

# Branch
main
```

---

## 📱 Browser Support

✅ Chrome/Edge (Latest)  
✅ Firefox (Latest)  
✅ Safari (Latest)  
✅ Mobile browsers (responsive design)

---

## 🎯 Next Steps (Optional)

- [ ] Connect to real API endpoints
- [ ] Add user authentication
- [ ] Implement real database (PostgreSQL/MongoDB)
- [ ] Add PDF export features
- [ ] Real-time WebSocket updates
- [ ] Advanced filtering & search
- [ ] Mobile app version
- [ ] Analytics dashboard

---

## 📝 License

© 2025 Goldenity Inc. - All rights reserved

---

## 🤝 Support

For issues or questions:
- Check [TESTING_SUMMARY.md](./TESTING_SUMMARY.md) for troubleshooting
- Review component code for implementation details
- Check Vite console for error messages

---

## 🎉 Demo Ready!

This prototype is **production-ready for client presentations** with all interactive features fully functional.

**Status:** ✅ All systems operational  
**Last Updated:** June 2, 2026  
**Development:** In Progress  

**Ready to impress your clients!** 🚀

---

### Quick Links
- 🌐 [Portal Launcher](http://localhost:5173/portals)
- 👤 [Customer Portal](http://localhost:5173/customer-portal)
- 🏢 [Internal Portal](http://localhost:5173/internal-portal)
- 📊 [Test Summary](./TESTING_SUMMARY.md)
- 📦 [Mock Data](./src/mockData.js)
