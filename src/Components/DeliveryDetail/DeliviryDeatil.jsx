import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import styles from '../../assets/Styles/DeliveryDetail.module.css';
import { useSelectedTea } from '../../ContextAPI/TeaContext';
import { useUserDetail } from '../../ContextAPI/UserContext'
function DeliveryDetail() {
  const navigate = useNavigate();
  const { addcard } = useSelectedTea()
  const { setUserDetail, OrderID, UserDetail } = useUserDetail()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    postcode: "",
    city: "",
    country: "",
    email: "",
    billingStreet: ""
  });

  const [useDifferentBilling, setUseDifferentBilling] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // remove error while typing
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };


  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.street.trim()) {
      newErrors.street = "Street address is required";
    }

    if (!formData.postcode.trim()) {
      newErrors.postcode = "Postcode is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (useDifferentBilling) {
      if (!formData.street.trim()) {
        newErrors.billingStreet = "Billing street is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    else {
      setUserDetail(formData);
      navigate('/review_payment')
    }
  };

  const handleBillingToggle = (e) => {
    setUseDifferentBilling(e.target.checked);
  };

  // Step state: 1 = MY BAG, 2 = DELIVERY, 3 = REVIEW & PAYMENT
  const [currentStep, setCurrentStep] = useState(2); // Delivery step is active
  const AdditionPrice = () => {
    return addcard
      .reduce((total, item) => total + item.price * item.quantity, 0)
    // .toFixed(2);
  };
  const steps = [
    { id: 1, label: 'MY BAG' },
    { id: 2, label: 'DELIVERY' },
    { id: 3, label: 'REVIEW & PAYMENT' },
  ];
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  useEffect(() => {
    if (UserDetail) {
      setFormData({
        firstName: UserDetail.firstName,
        lastName: UserDetail.lastName,
        street: UserDetail.street,
        postcode: UserDetail.postcode,
        city: UserDetail.city,
        country: UserDetail.country,
        email: UserDetail.email,
        billingStreet: UserDetail.billingStreet
      })
    }
  }, [UserDetail])
  return (
    <section className={styles.page}>

      {/* STEP INDICATOR */}
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <span className={currentStep === step.id ? '' : styles.disactive} onClick={() => step.label == 'MY BAG' ? navigate('/mybag') : ''}>
              {step.id}. {step.label}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`${styles.stepLine} ${currentStep > step.id ? styles.activeLine : ''
                  }`}
              >

              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* MAIN CONTENT GRID */}
      <div className={styles.layout}>

        {/* SHIPPING ADDRESS */}
        <div className={styles.column}>
          <h2 className={styles.heading}>Shipping Address</h2>
          <div>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className={`${styles.input} ${styles.inputLarge} ${errors.firstName ? styles.inputError : ""
                }`}
            />
            {errors.firstName && <p className={styles.errorText}>{errors.firstName}</p>}
          </div>
          <div>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className={`${styles.input} ${styles.inputLarge} ${errors.lastName ? styles.inputError : ""
                }`}
            />
            {errors.lastName && <p className={styles.errorText}>{errors.lastName}</p>}
          </div>
          <div>
            <input
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Street and"
              className={`${styles.input} ${styles.inputLarge} ${errors.street ? styles.inputError : ""
                }`}
            />
            {errors.street && <p className={styles.errorText}>{errors.street}</p>}
          </div>


          <div className={styles.row}>
            <div>
              <input
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="PostCode"
                className={`${styles.input} ${styles.inputSmall} ${errors.postcode ? styles.inputError : ""
                  }`}
              />
              {errors.postcode && <p className={styles.errorText}>{errors.postcode}</p>}
            </div>

            <div>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className={`${styles.input} ${styles.inputMedium} ${errors.city ? styles.inputError : ""
                  }`}
              />
              {errors.city && <p className={styles.errorText}>{errors.city}</p>}
            </div>
          </div>
          <div>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`${styles.input} ${styles.inputLarge} ${errors.country ? styles.inputError : ""
                }`}
            >
              <option value="">Country</option>
              <option value="India">India</option>
            </select>
            {errors.country && <p className={styles.errorText}>{errors.country}</p>}
          </div>
        </div>

        {/* BILLING ADDRESS */}

        <div className={styles.column}>
          <h2 className={styles.heading}>Billing Address</h2>
          <p className={styles.muted}>(Same as shipping address)</p>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              // value={formData.billingStreet}
              checked={useDifferentBilling}
              onChange={handleBillingToggle}
            />
            <span>Bill to different address</span>
          </label>

          {/* Billing form only if checked */}
          {useDifferentBilling && (
            <>
              <div>
                <input
                  name="billingStreet"
                  placeholder="Street Address"
                  value={formData.billingStreet}
                  onChange={handleChange}
                  className={`${styles.input} ${styles.inputLarge} ${errors.billingStreet ? styles.inputError : ""
                    }`}
                />
                {errors.billingStreet && (
                  <p className={styles.errorText}>{errors.billingStreet}</p>
                )}
              </div>
            </>
          )}

          <h2 className={styles.heading}>Contact Information</h2>
          <div>
            <input
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${styles.inputLarge} ${errors.email ? styles.inputError : ""
                }`}
            />
            {errors.email && (
              <p className={styles.errorText}>{errors.email}</p>
            )}
          </div>
        </div>


        {/* ORDER SUMMARY */}
        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>{AdditionPrice().toFixed(2)} Rs</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Delivery Charges</span>
            <span>10 Rs</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.summaryRowTotal}>
            <span>Total</span>
            <span>{(AdditionPrice() + 10).toFixed(2)} Rs</span>
          </div>

          <p className={styles.muted}>Estimated shipping time: 2 days</p>

          <button className={styles.payBtn} onClick={handleSubmit}>
            GO TO PAYMENT
          </button>
        </div>

      </div>

      <Footer />
    </section>
  );
}

export default DeliveryDetail;

