import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft, ArrowRight, Banknote, Bell, Building2, Camera,
  CheckCircle2, ChevronDown, Contact, FileCheck2, FileText,
  ImagePlus, Landmark, LogOut, Mail, Pencil,
  Search, ShieldCheck, UserRound, WalletCards
} from 'lucide-react';
import './styles.css';

const actions = [
  ['Site', Building2, 'sites'], ['KYC', FileCheck2, 'kyc'], ['Dynamic Limit', WalletCards, 'limit'],
  ['User Profile', UserRound, 'profile'], ['Contact Us', Contact, 'contact'], ['Cash Loading Fund', Banknote, 'fund'],
  ['Security Deposit', ShieldCheck, 'deposit'], ['ATM wise Photo', Camera, 'atm'], ['Indent Withdrawn Confirmation', FileText, 'indent'],
  ['Cash Balance Confirmation', Landmark, 'balance']
];

const atmData = [
  { id: 'ATM-FBD-1023', location: 'FARRUKHABAD', status: 'Live' },
  { id: 'ATM-KNP-0876', location: 'KANPUR NAGAR', status: 'Live' },
  { id: 'ATM-LKO-0441', location: 'LUCKNOW', status: 'No-Info' }
];

function App() {
  const [screen, setScreen] = useState('home');
  const [notice, setNotice] = useState('');
  const navigate = (next) => { setScreen(next); };
  const toast = (message) => { setNotice(message); window.setTimeout(() => setNotice(''), 2600); };

  return (
    <div className="app-shell">
      <div className="app-frame">
        {screen === 'home' ? <Dashboard onNavigate={navigate} /> :
          <Screen screen={screen} onBack={() => navigate('home')} onNavigate={navigate} toast={toast} />}
      </div>
      {notice && <div className="toast">{notice}</div>}
    </div>
  );
}

function Header({ title, onBack, action }) {
  return <header className="topbar">
    <button className="icon-button" onClick={onBack} aria-label="Go back"><ArrowLeft size={22} /></button>
    <img className="company-logo compact-logo" src="/dexter-india-logo.jpeg" alt="Dexter India" />
    <h1>{title}</h1>
    {action || <div className="header-spacer" />}
  </header>;
}

function Dashboard({ onNavigate }) {
  return <div className="page">
    <header className="topbar dashboard-bar">
      <img className="company-logo compact-logo dashboard-logo" src="/dexter-india-logo.jpeg" alt="Dexter India" />
      <div className="header-actions"><Bell size={20} /><span className="notification-dot" /></div>
    </header>
    <section className="welcome">
      <div><p className="eyebrow">OPERATIONS CONSOLE</p><h1>Good evening, Sir</h1><p className="muted">Manage your ATM network from one place.</p></div>
      <div className="avatar">SS</div>
    </section>
    <main className="dashboard-content">
      <div className="section-heading"><div><p className="eyebrow">QUICK ACCESS</p><h2>What would you like to do?</h2></div><span className="live-pill"><i /> Live</span></div>
      <div className="action-grid">{actions.map(([label, Icon, route]) =>
        <button className="action-tile" key={label} onClick={() => onNavigate(route)}>
          <span className="tile-icon"><Icon size={25} strokeWidth={1.8} /></span><span>{label}</span><ArrowRight className="tile-arrow" size={16} />
        </button>
      )}</div>
      <div className="summary-card"><div><p className="eyebrow light">TODAY'S NETWORK</p><strong>34</strong><span> ATMs operational</span></div><div className="summary-divider" /><div><strong>₹ 18.4L</strong><span> cash loaded today</span></div><div className="summary-chart"><span /><span /><span /><span /><span /></div></div>
    </main>
    <footer className="app-footer">Dexter Operations <span>v2.9</span></footer>
  </div>;
}

function Screen({ screen, onBack, onNavigate, toast }) {
  const screens = {
    kyc: <Kyc toast={toast} />, fund: <Fund onNavigate={onNavigate} />, atm: <AtmSelection onNavigate={onNavigate} />,
    indent: <Indent toast={toast} />, deposit: <Deposit toast={toast} />, contact: <ContactScreen />,
    profile: <Profile toast={toast} />, limit: <DynamicLimit toast={toast} />, sites: <Sites toast={toast} />,
    balance: <Balance onNavigate={onNavigate} />, notification: <Notification />
  };
  const titles = { kyc: 'KYC / Bank Details', fund: 'Cash Loading Fund', atm: 'ATM ID Selection', indent: 'Indent Confirmation', deposit: 'Security Deposits', contact: 'Contact Us', profile: 'Profile', limit: 'Dynamic Limit', sites: 'Site Details', balance: 'Cash Balance', notification: 'Notifications' };
  return <div className="page"><Header title={titles[screen]} onBack={onBack} action={screen === 'profile' ? <button className="icon-button" onClick={() => toast('Edit profile is coming soon')}><Pencil size={18} /></button> : null} /><main className="screen-content">{screens[screen]}</main></div>;
}

function Field({ label, placeholder, type = 'text', value, onChange, suffix }) {
  return <label className="field"><span>{label}</span><div className="input-wrap"><input type={type} placeholder={placeholder} value={value} onChange={onChange} />{suffix}</div></label>;
}
function SelectField({ label, children }) { return <label className="field"><span>{label}</span><div className="select-wrap"><select defaultValue=""><option value="" disabled>{children}</option><option>Farrukhabad</option><option>Lucknow</option><option>Kanpur Nagar</option></select><ChevronDown size={16} /></div></label>; }
function UploadBox({ label = '+ Upload image or PDF' }) { return <button className="upload-box" onClick={(e) => e.currentTarget.classList.toggle('uploaded')}><ImagePlus size={22} /><span>{label}</span></button>; }
function PrimaryButton({ children, onClick, outline = false }) { return <button className={outline ? 'button outline' : 'button'} onClick={onClick}>{children}</button>; }
function SectionTitle({ eyebrow, title, action }) { return <div className="section-heading compact"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{action}</div>; }

function Kyc({ toast }) {
  const [tab, setTab] = useState('kyc');
  return <div><div className="tabs"><button className={tab === 'kyc' ? 'active' : ''} onClick={() => setTab('kyc')}>KYC</button><button className={tab === 'bank' ? 'active' : ''} onClick={() => setTab('bank')}>BANK DETAILS</button></div>
    {tab === 'kyc' ? <div className="form-card">
      <Field label="Aadhaar Card" placeholder="XXXX XXXX XXXX" suffix={<UploadBox label="+ Upload image" />} />
      <Field label="PAN Card no" placeholder="XXXXXXXXXX" suffix={<UploadBox label="+ Upload image" />} />
      <Field label="GSTIN" placeholder="XXXXXXXXXXXXXXX" suffix={<UploadBox label="+ Upload image" />} />
      <Field label="Registered Address" placeholder="Enter registered address" /><Field label="PIN Code" placeholder="Enter PIN code" />
      <div className="two-col"><SelectField label="State">Select state</SelectField><SelectField label="City">Select city</SelectField></div>
      <PrimaryButton onClick={() => toast('KYC details saved successfully')}>SAVE DETAILS</PrimaryButton>
    </div> : <div className="form-card"><Field label="Account holder name" placeholder="Enter name" /><Field label="Account number" placeholder="Enter account number" /><Field label="IFSC code" placeholder="Enter IFSC code" /><SelectField label="Bank">Select bank</SelectField><PrimaryButton onClick={() => toast('Bank details saved successfully')}>SAVE DETAILS</PrimaryButton></div>}
  </div>;
}

function Fund({ onNavigate }) {
  const rows = [['13 Oct 2026', '34 ATMs', '₹ 6,42,000', '₹ 8,10,000', '₹ 1,68,000'], ['12 Oct 2026', '31 ATMs', '₹ 5,84,500', '₹ 7,50,000', '₹ 1,65,500'], ['11 Oct 2026', '29 ATMs', '₹ 5,21,000', '₹ 6,80,000', '₹ 1,59,000']];
  return <div><div className="date-filter"><Field label="From date" placeholder="01/10/2026" type="date" /><Field label="To date" placeholder="22/10/2026" type="date" /><button className="filter-button"><Search size={17} /></button></div><SectionTitle eyebrow="CASH MANAGEMENT" title="Loading summary" action={<span className="count-pill">3 entries</span>} /><div className="data-list">{rows.map(row => <article className="data-card" key={row[0]}><div className="card-top"><strong>{row[0]}</strong><span>{row[1]}</span></div><div className="metric-grid"><Metric label="Total withdrawn" value={row[2]} /><Metric label="Total loaded" value={row[3]} /><Metric label="Bal. in-hand / bank" value={row[4]} positive /></div><button className="text-link" onClick={() => onNavigate('atm')}>View ATM breakdown <ArrowRight size={14} /></button></article>)}</div></div>;
}
function Metric({ label, value, positive }) { return <div className={positive ? 'metric positive' : 'metric'}><small>{label}</small><strong>{value}</strong></div>; }

function AtmSelection({ onNavigate }) { return <div><div className="search-field"><Search size={18} /><input placeholder="Search ATM ID" /></div><div className="list-label">SELECT AN ATM TO CONTINUE</div><div className="atm-list">{atmData.map((atm, i) => <button className="atm-row" key={atm.id} onClick={() => onNavigate('indent')}><div className="atm-avatar">{String(i + 1).padStart(2, '0')}</div><div><strong>{atm.id}</strong><span>{atm.location}</span></div><div className="atm-meta"><span>13 Oct 2026</span>{atm.status === 'Live' ? <CheckCircle2 className="success" size={19} /> : <XCircle className="danger" size={19} />}<ArrowRight size={16} /></div></button>)}</div></div>; }

function Indent({ toast }) {
  const [counts, setCounts] = useState({ 100: 0, 200: 0, 500: 344 });
  const total = counts[100] * 100 + counts[200] * 200 + counts[500] * 500;
  return <div><div className="info-card"><div className="card-top"><strong>ATM-FBD-1023</strong><span>13 Oct 2026</span></div><div className="metric-grid"><Metric label="Indent amount" value="₹ 14,70,000" /><Metric label="Branch SOL ID" value="0" /><Metric label="Bal. in-hand / bank" value="₹ 0" /></div></div><div className="form-card">
    <SectionTitle eyebrow="CASH LOADING" title="Enter physical cash before loading" action={<span className="muted">Count only</span>} /><div className="denomination-grid">{[100, 200, 500].map(n => <Field key={n} label={`x${n}`} type="number" value={counts[n]} onChange={e => setCounts({ ...counts, [n]: Number(e.target.value) })} />)}<Field label="Total amount" value={`₹ ${total.toLocaleString('en-IN')}`} /></div>
    <Field label="Remarks" placeholder="Add a note for this loading" /><Field label="Cash loading date time" type="datetime-local" /><button className="capture-box" onClick={() => toast('Camera capture opened')}><Camera size={31} /><strong>Capture safe-door image</strong><span>Take an image when the safe-door opens for cash loading</span></button><PrimaryButton onClick={() => toast('Indent confirmation submitted')}>SUBMIT CONFIRMATION</PrimaryButton>
  </div></div>;
}

function Deposit({ toast }) { return <div className="form-card"><SelectField label="Select ATM ID">Select ATM ID</SelectField><Field label="Fund amount" placeholder="₹ Enter amount" type="number" /><Field label="Date" placeholder="dd/mm/yyyy" type="date" /><Field label="UTR no" placeholder="Enter UTR number" /><SelectField label="Select bank">Select bank</SelectField><UploadBox label="Upload confirmation slip (image or PDF)" /><div className="status-row"><span>Verification status</span><strong>Pending verification</strong></div><button className="text-link right">View history <ArrowRight size={14} /></button><PrimaryButton onClick={() => toast('Security deposit updated')}>UPDATE</PrimaryButton></div>; }

function ContactScreen() { return <div><SelectField label="Select contact type">Mails only (per day)</SelectField><div className="contact-list">{[['Level 1', 'Sr. Executive', 'Ankit Sharma'], ['Level 2', 'Sr. Manager', 'Neha Verma'], ['Final', 'Regional Head', 'Amit Kapoor']].map(([level, role, name]) => <article className="contact-card" key={level}><div className="contact-head"><strong>{level}</strong><span>Escalation</span></div><div className="contact-body"><div><small>Designation</small><strong>{role}</strong></div><div><small>Name</small><strong>{name}</strong></div><div className="full"><small>Mail ID</small><strong>support@dexterbank.in</strong></div></div></article>)}</div></div>; }

function Profile({ toast }) { return <div><div className="profile-hero"><div className="profile-avatar">SS</div><div><p className="eyebrow light">OPERATOR PROFILE</p><h2>Paras Dubey</h2><span>Field Operations</span></div></div><div className="profile-list"><div><Mail /><span>Email ID<strong>paras.dubey@dexterbank.in</strong></span></div><div><MapPinIcon /><span>Site PIN Code<strong>Not updated</strong></span></div><div><Building2 /><span>Site Address<strong>Not updated</strong></span></div></div><PrimaryButton outline onClick={() => toast('You have been logged out')}> <LogOut size={17} /> LOGOUT</PrimaryButton><p className="version">Version 2.9</p></div>; }
function MapPinIcon() { return <span className="map-pin">⌖</span>; }

function DynamicLimit({ toast }) { return <div><SelectField label="Select ATM ID">Select ATM ID</SelectField>{[['Withdrawal limit', 'Current withdrawal limit', 'Enter new withdrawal limit', 'REQUEST WITHDRAWAL LIMIT UPGRADE'], ['Deposit limit', 'Current deposit limit', 'Enter new deposit limit', 'REQUEST DEPOSIT LIMIT UPGRADE'], ['Additional CLF', 'Additional CLF', 'Enter new additional CLF limit', 'REQUEST ADDITIONAL CLF LIMIT UPGRADE']].map(([title, current, input, button]) => <section className="limit-section" key={title}><SectionTitle eyebrow="LIMIT MANAGEMENT" title={title} /><Field label={current} placeholder="₹ 10,00,000" /><Field label={input} placeholder="Enter amount" type="number" />{title !== 'Withdrawal limit' && <><Field label="Enter UTR details" placeholder="Enter UTR number" /><UploadBox label="+ Add image" /></>}<PrimaryButton outline onClick={() => toast(`${title} request submitted`)}>{button}</PrimaryButton><p className="approval"><span className="dot pending" /> Approval status: <strong>Not requested</strong></p></section>)}</div>; }

function Sites({ toast }) { return <div><div className="search-row"><div className="search-field"><Search size={18} /><input placeholder="ATM ID" /></div><PrimaryButton onClick={() => toast('Showing all sites')}>SEARCH</PrimaryButton></div><div className="site-list">{atmData.map(atm => <article className="site-card" key={atm.id}><div className="site-head"><strong>{atm.id}</strong><span>{atm.status}</span><small>{atm.location}</small></div><div className="site-actions">{['Transaction Details', 'Cash Balance', 'Call Log', 'Submission of CBR', 'Statement Upload'].map(label => <button key={label} onClick={() => toast(`${label} opened`)}>{label}</button>)}</div></article>)}</div></div>; }
function Balance({ onNavigate }) { return <div><div className="empty-card"><Landmark size={38} /><h2>Cash balance confirmation</h2><p>Select an ATM to view and confirm its cash balance.</p><button className="text-link" onClick={() => onNavigate('atm')}>Select ATM <ArrowRight size={14} /></button></div></div>; }
function Notification() { return <div className="notification-empty"><Bell size={35} /><h2>No new notifications</h2><p>You're all caught up. We'll let you know when something needs your attention.</p></div>; }

createRoot(document.getElementById('root')).render(<App />);
