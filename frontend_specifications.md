# Frontend Development Specifications: ATM Operations & Banking Applications

## App 1: ATM Operations & Cash Management (Red Theme)
This application features a red and white color scheme and focuses on operational logistics for ATM management.

### 1. Dashboard / Home Screen
*   **Header:** Standard app bar with a hamburger menu icon (left), title area (empty or logo), and standard system status icons (time, notifications, battery).
*   **Layout:** A 2-column grid containing square action tiles with white icons and text on a red background.
*   **Grid Items:**
    *   Site
    *   KYC
    *   Dynamic Limit
    *   User Profile
    *   Contact Us
    *   Cash Loading Fund
    *   Security Deposit
    *   ATM wise Photo
    *   Indent Withdrawn Confirmation
    *   Cash Balance Confirmation

### 2. KYC / Bank Details Screen
*   **Header:** Top app bar with a back arrow and title "KYC/Bank Details".
*   **Navigation:** Top tab layout with two tabs: "KYC" (active) and "BANK DETAILS".
*   **Form Fields (KYC Tab):**
    *   **Aadhaar Card:** Text input (placeholder "XXXX XXXX XXXX") with an attached "+ Upload Image" button area.
    *   **PAN Card no:** Text input (placeholder "XXXXXXXXXX") with an attached "+ Upload Image" button area.
    *   **GSTIN:** Text input (placeholder "XXXXXXXXXXXXXXX") with an attached "+ Upload Image" button area.
    *   **Registered Address:** Standard text input field.
    *   **PIN Code:** Standard text input field.
    *   **Select State:** Dropdown selector.
    *   **Select City:** Dropdown selector.

### 3. Cash Loading Fund (Date Selection)
*   **Header:** App bar with back arrow and title "Date selection".
*   **Filter Bar:** A horizontal container with "From date" (calendar icon) and "To date" (calendar icon) pickers.
*   **List View:** A vertically scrolling list of cards, each representing a specific date.
*   **Card UI Elements:**
    *   Top left: Date (e.g., "13-Oct-2026").
    *   Top right: Number of ATMs (e.g., "34 ATMs").
    *   Three-column data display: "Total Withdrawn" (Amount), "Total Loaded" (Amount), and "Bal. In-Hand/Bank" (Amount).

### 4. ATM ID Selection
*   **Header:** App bar with back arrow and title "ATM Id Selection".
*   **List View:** Vertically scrolling list of ATM entries.
*   **List Item Elements:**
    *   Left side: ATM ID string (alphanumeric).
    *   Right side: Date (e.g., "13-Oct-2026") followed by a status indicator (either a green checkmark circle or a red exclamation mark circle).

### 5. Indent Withdrawn Confirmation Form
*   **Header:** App bar with back arrow and title "Indent Withdrawn Confirmation".
*   **Top Info Card:** Displays ATM ID (top left), Date (top right), Indent Amount, Branch SOL ID, and Bal. In-Hand/Bank.
*   **Read-only Data Fields:** Three side-by-side fields for "Withdrawn Amount", "SOL ID", and "Loaded Amount".
*   **Cash Denomination Input Grid:** "Enter physical cash before loading [Count only]" featuring input fields for "x100", "x200", "x500", and a calculated "Total Amount" field.
*   **Additional Inputs:**
    *   "Remarks": Multi-line text area.
    *   "Cash loading date time": Field with a clock/calendar icon.
*   **Image Upload:** A large rectangular area with an image placeholder icon and the instruction text "Capture an image when the safe-door opens for the cash loading".

### 6. Security Deposits
*   **Header:** App bar with back arrow and title "Security Deposits".
*   **Form Fields:**
    *   "Select ATM ID": Dropdown.
    *   "FUND AMOUNT": Text input.
    *   "DATE": Date picker with calendar icon and "dd/mm/yyyy" placeholder.
    *   "UTR NO": Text input.
    *   "Select Bank": Dropdown.
*   **Upload Area:** Rectangular container labeled "UPLOAD CONFIRMATION SLIP(IMAGE OR PDF)" with a "+ Upload Image or Pdf" button.
*   **Status & Actions:** "VERIFICATION STATUS" read-only field, a "View History" text link aligned to the right, and a primary red "UPDATE" button at the bottom.

### 7. Contact Us
*   **Header:** App bar with back arrow and title "Contact Us".
*   **Selection:** A "Select Contact Type" dropdown at the top. The dropdown contains a list of operational issues such as "Additional Funding(ALF)", "ATM helpdesk - Franchise Model", "Audit", "Commission Issues", etc.
*   **Escalation Matrix View:** When a specific type (like "Mails only") is selected, the screen renders a vertical list of contact cards.
*   **Contact Cards:** Themed in red, broken down by hierarchy: "Level 1", "Level 2", and "Final". Each card contains labels for "Designation", "Name", and "Mail ID" with the corresponding data.

### 8. User Profile
*   **Header:** App bar with back arrow, title "PROFILE", and an edit (pencil) icon.
*   **Top Visual:** A diagonal split graphic background at the top.
*   **User Details List:**
    *   Email ID (with mail icon).
    *   Site Pin Code (with user icon), displaying "Not Up".
    *   Site Address (with building icon), displaying "Not Updated".
*   **Actions:** A full-width outlined "Logout" button.
*   **Footer:** Displays "Version: 2.9" centered at the bottom.

### 9. Dynamic Limit Management
*   **Header:** App bar with back arrow and title "Dynamic Limit".
*   **Global Selector:** "Select ATM ID" dropdown at the top.
*   **Section 1: Withdrawal Limit**
    *   "Current Withdrawal Limit" read-only field.
    *   "Enter New Withdrawal Limit" input field.
    *   "REQUEST WITHDRAWAL LIMIT UPGRADE" button (red text/outline).
    *   "Approval Status" text.
*   **Section 2: Deposit Limit**
    *   "Current Deposit Limit" read-only field.
    *   "Enter New Deposit Limit" input field.
    *   "Enter UTR Details" input field.
    *   "Add Image" rectangular upload component with a "+" icon.
    *   "REQUEST DEPOSIT LIMIT UPGRADE" button.
    *   "Approval Status" text.
*   **Section 3: Additional CLF**
    *   "Additional CLF" read-only field.
    *   "Enter New Additional CLF Limit" input field.
    *   "Enter UTR Details" input field.
    *   "Add Image" rectangular upload component with a "+" icon.
    *   "REQUEST ADDITIONAL CLF LIMIT UPGRADE" button.
    *   "Approval Status" text.

### 10. Site Details
*   **Header:** App bar with back arrow and title "Site Details".
*   **Search Bar:** Input field with a magnifying glass icon placeholder ("ATM ID") and a red "SEARCH" button.
*   **List View:** Vertical list of site cards.
*   **Site Card Elements:**
    *   Red header banner containing ATM ID, Status, and Location text (e.g., FARRUKHABAD). Some headers show "No-Info".
    *   A 2-column grid of grey action buttons within the card: "Transaction Details", "Cash Balance", "Call Log", "Submission of CBR", and a full-width "Statement Upload" button.

### 11. Notification
*   **Header:** App bar with back arrow and title "Notification".
*   **Body:** Empty state displaying a light grey background with centered text: "No new notifications".

---

## App 2: Consumer Account Services (Green Theme)
This application features a soft green and white UI, designed for consumer-facing banking and account services.

### 12. Services Dashboard
*   **Header:** Top app bar with back arrow, title "Services", and a power/logout icon on the right.
*   **Layout Structure:** Categorized sections with a title on the left and a red "VIEW ALL" button on the right. Underneath each category is a grid of tiles.
*   **Category 1: Apply**
    *   Grid tiles (green icons, white background): "Purchase Gift Card", "Online Loan Application", "Personal Loan", "Apply Now", "Apply for PMJJBY/PMSBY", and "Health Insurance".
*   **Category 2: Account Services**
    *   Grid tiles (green icons, white background): "A/c Statement Request", "Online Nomination", "Register for Email Statement", "Raise/Track Service Request", "Nach Mandate Cancellation", "Download Interest Certificate", "Loan Int Cert/Statement", "Aadhaar Enabled Payment System" (AePS logo), "Raise Dispute", "Report Fraud", and "Track Foreign Remittance".
*   **Floating Action Button:** An orange circular FAB with a white magnifying glass icon situated in the bottom right corner.
*   **Bottom Navigation Bar:** Dark green bar with five destinations: "Home" (active), a building icon, a shield/card icon, a credit card icon, and "Services" (gear icon).