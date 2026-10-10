import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import Logo from "../assets/Images/Logo.png";

export default function SecurityVerification() {
  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState(10);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const handleConfirm = async () => {
    if (otp.length !== 6) return;
    setIsSubmitting(true);
    try {
      // TODO: call your backend verify endpoint
      console.log('Verifying OTP:', otp);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText(); // browser API that reads the clipboard
      const digits = text.replace(/\D/g, '').slice(0, 6); //replace(/\D/g, '') regex that removes every character that is not a digit. \D = "not a digit", g = global.
      setOtp(digits);
    } catch (err) {
      console.error('Paste failed:', err);
    }
  };

  const handleResend = () => {
    if (seconds > 0) return;
    setSeconds(10);
    // TODO: call your resend API
  };

  const isComplete = otp.length === 6;

  return (
    <div className="" style={styles.wrapper}>
      {/* Header */}
      <div style={styles.header}>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <img
            src={Logo}
            alt="logo"
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />
          <span className="text-sm font-bold text-primary min-[360px]:text-base min-[400px]:text-xl sm:text-2xl">
            <span className="text-green">Comfort</span>Group
          </span>
        </div>
      </div>

      {/* Page */}
      <div style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.title}>Security verification</h1>

          <h2 style={styles.label}>Email</h2>
          <p style={styles.subtitle}>
            Enter the verification code received via your email
            <br />
            <span style={styles.email}>pet****@gmail.com</span>
          </p>

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputType="tel"
            containerStyle={styles.otpContainer}
            renderInput={(props, index) => (
              <input
                {...props}
                style={{
                  ...styles.otpInput,
                  borderColor:
                    focusedIndex === index ? '#0A2A66' : '#e0e4ec',
                  boxShadow:
                    focusedIndex === index
                      ? '0 0 0 3px rgba(10, 42, 102, 0.12)'
                      : 'none',
                }}
                onFocus={(e) => {
                  setFocusedIndex(index);
                  props.onFocus?.(e);
                }}
                onBlur={(e) => {
                  setFocusedIndex(null);
                  props.onBlur?.(e);
                }}
              />
            )}
          />

          <div style={styles.row}>
            <span style={styles.link} onClick={handlePaste}>
              Paste
            </span>
            <span
  style={{
    ...styles.link,
    color: seconds > 0 ? 'rgba(24, 184, 28, 0.45)' : '#18B81C',
    cursor: seconds > 0 ? 'default' : 'pointer',
  }}
  onClick={handleResend}
>
  Resend({seconds} s)
</span>

          </div>

          <button
            onClick={handleConfirm}
            disabled={!isComplete || isSubmitting}
            style={{
              ...styles.button,
              ...(!isComplete || isSubmitting ? styles.buttonDisabled : {}),
            }}
            onMouseEnter={(e) => {
              if (isComplete && !isSubmitting) {
                e.currentTarget.style.backgroundColor = '#071d47';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow =
                  '0 6px 16px rgba(10, 42, 102, 0.28)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0A2A66';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 2px 8px rgba(10, 42, 102, 0.18)';
            }}
          >
            {isSubmitting ? 'Verifying...' : 'Confirm'}
          </button>

          <div style={styles.footer}>
            <p style={styles.footerText}>
              Didn’t receive the Email verification code?
            </p>
            <p style={styles.footerLink}>Send verification code to number.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    width: '100%',
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '1.5rem clamp(1rem, 4vw, 3rem)',
  },
  page: {
    flex: 1,
    background: 'linear-gradient(180deg, #f7f9fc 0%, #eef2f8 100%)',
    padding: '2rem 1rem',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'hidden',
    width: '100%',
  },
  card: {
    maxWidth: '620px',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: 'clamp(1.5rem, 5vw, 3rem) clamp(1rem, 4vw, 2.5rem)',
    boxShadow: '0 10px 40px rgba(10, 42, 102, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  title: {
    fontSize: 'clamp(1.3rem, 5vw, 1.75rem)',
    fontWeight: 700,
    color: '#0A2A66',
    margin: '0 0 2.5rem 0',
    letterSpacing: '-0.02em',
  },
  label: {
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#2c3e5c',
    margin: '0 0 0.5rem 0',
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#7a869a',
    lineHeight: 1.6,
    margin: '0 0 1.75rem 0',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  email: {
    color: '#0A2A66',
    fontWeight: 600,
  },
  otpContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: 'clamp(4px, 1.5vw, 10px)',
    marginBottom: '1.25rem',
    width: '100%',
    flexWrap: 'nowrap',
  },
  otpInput: {
    width: 'clamp(2.2rem, 11vw, 4rem)',
    height: 'clamp(2.8rem, 13vw, 3.5rem)',
    minWidth: 0,
    fontSize: 'clamp(1rem, 4vw, 1.4rem)',
    textAlign: 'center',
    backgroundColor: '#f4f6fa',
    border: '1.5px solid #e0e4ec',
    borderRadius: '10px',
    outline: 'none',
    color: '#0A2A66',
    fontWeight: 600,
    transition: 'border-color 0.15s, box-shadow 0.15s',
    boxSizing: 'border-box',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '1.75rem',
  },
  link: {
  color: '#18B81C',
  fontSize: '0.9rem',
  cursor: 'pointer',
  fontWeight: 600,
  transition: 'opacity 0.15s',
},
  button: {
    width: '100%',
    backgroundColor: '#0A2A66',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    padding: '1rem',
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.02em',
    cursor: 'pointer',
    marginBottom: '1.5rem',
    boxShadow: '0 2px 8px rgba(10, 42, 102, 0.18)',
    transition: 'background-color 0.2s, transform 0.15s, box-shadow 0.2s',
  },
  buttonDisabled: {
    backgroundColor: '#b7c1d4',
    cursor: 'not-allowed',
    boxShadow: 'none',
    transform: 'none',
  },
  footer: {
    marginTop: '0.5rem',
  },
  footerText: {
    color: '#7a869a',
    fontSize: '0.85rem',
    margin: '0 0 0.35rem 0',
  },
  footerLink: {
    color: '#0A2A66',
    fontSize: '0.85rem',
    fontWeight: 600,
    textDecoration: 'underline',
    margin: 0,
    cursor: 'pointer',
  },
};