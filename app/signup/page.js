'use client'
import { useState } from 'react'

export default function Signup() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    grade: '', course: '', experience: '', goals: '',
    schedule: '', howHeard: '', questions: '',
  })

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="page-hero" style={{ minHeight: '80vh', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
          <h1>You're enrolled!</h1>
          <p style={{ maxWidth: '500px', margin: '1rem auto 2rem' }}>
            Thanks {form.firstName}! We've received your enrollment. We'll reach out
            to <strong>{form.email}</strong> within 24 hours with next steps.
          </p>
          <p style={{ color: 'var(--muted)' }}>
            Questions? Call or text us at <strong>512-348-7222</strong>
          </p>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="aurora" aria-hidden>
        <div className="aurora-orb orb2" />
      </div>

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Enrollment Form</div>
          <h1>Sign up for<br /><span className="gradient-text">EngCores classes</span></h1>
          <p>Fill out the form below and we'll reach out within 24 hours to confirm your spot.</p>
        </div>
      </section>

      <section className="form-section">
        <div className="container">
          <form className="signup-form" onSubmit={submit}>

            <div className="form-section-title">Personal Information</div>
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input name="firstName" value={form.firstName} onChange={handle} placeholder="John" required />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input name="lastName" value={form.lastName} onChange={handle} placeholder="Smith" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="john@email.com" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="512-000-0000" />
              </div>
            </div>

            <div className="form-group">
              <label>Current Grade Level *</label>
              <select name="grade" value={form.grade} onChange={handle} required>
                <option value="">Select your grade</option>
                <option>6th Grade</option>
                <option>7th Grade</option>
                <option>8th Grade</option>
                <option>9th Grade (Freshman)</option>
                <option>10th Grade (Sophomore)</option>
                <option>11th Grade (Junior)</option>
                <option>12th Grade (Senior)</option>
                <option>College Student</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-section-title">Course Selection</div>
            <div className="form-group">
              <label>Which course are you interested in? *</label>
              <select name="course" value={form.course} onChange={handle} required>
                <option value="">Select a course</option>
                <option>CAD Design</option>
                <option>Programming</option>
                <option>Both — CAD Design & Programming</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div className="form-group">
              <label>Do you have any prior experience?</label>
              <select name="experience" value={form.experience} onChange={handle}>
                <option value="">Select one</option>
                <option>No experience — complete beginner</option>
                <option>A little (some basic exposure)</option>
                <option>Intermediate (taken a class before)</option>
                <option>Advanced (looking to go deeper)</option>
              </select>
            </div>

            <div className="form-group">
              <label>What are your goals? What do you hope to achieve?</label>
              <textarea name="goals" value={form.goals} onChange={handle} rows={3} placeholder="e.g. I want to learn 3D modeling for engineering, or I want to build my own apps..." />
            </div>

            <div className="form-section-title">Scheduling</div>
            <div className="form-group">
              <label>What schedule works best for you? *</label>
              <select name="schedule" value={form.schedule} onChange={handle} required>
                <option value="">Select preference</option>
                <option>Weekday mornings</option>
                <option>Weekday afternoons (after school)</option>
                <option>Weekday evenings</option>
                <option>Weekend mornings</option>
                <option>Weekend afternoons</option>
                <option>Flexible — any time works</option>
              </select>
            </div>

            <div className="form-section-title">Final Questions</div>
            <div className="form-group">
              <label>How did you hear about EngCores?</label>
              <select name="howHeard" value={form.howHeard} onChange={handle}>
                <option value="">Select one</option>
                <option>Friend or classmate</option>
                <option>School announcement</option>
                <option>Social media</option>
                <option>Google search</option>
                <option>Parent/family member</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Any questions or additional comments?</label>
              <textarea name="questions" value={form.questions} onChange={handle} rows={3} placeholder="Ask us anything..." />
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-full">
              Submit Enrollment →
            </button>

            <p className="form-note">
              We'll contact you within 24 hours. You can also reach us directly at{' '}
              <strong>512-348-7222</strong> or <strong>aku.anoop007@gmail.com</strong>
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
