import React, { useState } from 'react';
import { X, Check, Send, User, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ORG_DETAILS } from '../data/b2mData';

interface MentorVolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MentorVolunteerModal: React.FC<MentorVolunteerModalProps> = ({ isOpen, onClose }) => {
  const [roleType, setRoleType] = useState<string>('male-mentor');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [experience, setExperience] = useState<string>('');
  const [customSkill, setCustomSkill] = useState<string>('');
  const [skillsOffered, setSkillsOffered] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const availableSkills = [
    'Trade Craft (Plumbing/Mechanics)',
    'STEM / Robotics / Coding',
    'Sports Coaching (Soccer/Rugby/Hockey)',
    'Career Guidance & Mentoring',
    'Mental Health & Psychology',
    'First Aid / Medical Care',
    'African Languages & Cultural Studies',
    'Life Skills & Youth Circles',
  ];

  const roleLabels: Record<string, string> = {
    'male-mentor': 'Male Mentor (Long-term journey)',
    'trade-facilitator': 'Trade / STEM Coach (Camp workshop lead)',
    'guest-speaker': 'Guest Speaker (Career / Psychologist)',
  };

  const toggleSkill = (skill: string) => {
    if (skillsOffered.includes(skill)) {
      setSkillsOffered(skillsOffered.filter((s) => s !== skill));
    } else {
      setSkillsOffered([...skillsOffered, skill]);
    }
  };

  const buildMailtoUrl = () => {
    const recipient = ORG_DETAILS.contacts.generalEmail;
    const subject = encodeURIComponent(`Volunteer & Mentor Application: ${fullName} (${roleLabels[roleType] || roleType})`);
    const allSkills = [...skillsOffered, ...(customSkill.trim() ? [`Other: ${customSkill.trim()}`] : [])];
    const body = encodeURIComponent(
`BOYS 2 MEN SOUTH AFRICA - VOLUNTEER / MENTOR APPLICATION

Full Name: ${fullName}
Email Address: ${email}
Phone / WhatsApp: ${phone}
Location: ${location || 'N/A'}
Requested Role: ${roleLabels[roleType] || roleType}

Skills & Areas Offered:
${allSkills.length > 0 ? allSkills.map(s => `- ${s}`).join('\n') : '- General Support'}

Motivation & Experience:
${experience || 'None provided'}

---
Application submitted via Boys 2 Men South Africa web portal.`
    );
    return `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F59E0B', '#C26118', '#10B981'],
    });

    // Trigger direct email sending to B2M
    const mailtoUrl = buildMailtoUrl();
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden text-stone-900 text-left">
        {/* Header banner */}
        <div className="bg-stone-900 text-stone-100 p-6 sm:p-7 flex items-start justify-between">
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">
              Volunteer & Mentorship
            </span>
            <h3 className="text-xl sm:text-2xl font-light font-display text-white">
              Journey with the boys of KwaZulu-Natal
            </h3>
            <p className="text-xs text-stone-400 font-normal">
              Stand in the gap as a positive male role model and trade coach across KwaZulu-Natal.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors flex items-center justify-center flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Role selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700">How would you like to contribute?</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'male-mentor', label: 'Male Mentor', sub: 'Long-term journey' },
                    { id: 'trade-facilitator', label: 'Trade / STEM Coach', sub: 'Camp workshop lead' },
                    { id: 'guest-speaker', label: 'Guest Speaker', sub: 'Career / Psychologist' },
                  ].map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRoleType(r.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        roleType === r.id
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-stone-50 border-stone-200/80 hover:bg-stone-100 text-stone-800'
                      }`}
                    >
                      <span className="text-xs font-semibold block">{r.label}</span>
                      <span className={`text-[10px] ${roleType === r.id ? 'text-stone-300' : 'text-stone-500'}`}>{r.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">Full Name and Surname *</label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-full border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-stone-900 text-xs text-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-full border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-stone-900 text-xs text-stone-900 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">Phone (WhatsApp) *</label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 076 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-full border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-stone-900 text-xs text-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">Current Location</label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Ndwedwe / Durban / PMB"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-full border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-stone-900 text-xs text-stone-900 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Skills checklist */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700">
                  Skills & Areas You Can Teach / Support (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableSkills.map((sk) => {
                    const selected = skillsOffered.includes(sk);
                    return (
                      <button
                        type="button"
                        key={sk}
                        onClick={() => toggleSkill(sk)}
                        className={`p-2.5 rounded-xl text-left text-xs font-normal border flex items-center justify-between transition-colors ${
                          selected
                            ? 'bg-stone-900 border-stone-900 text-white font-medium'
                            : 'bg-stone-50 border-stone-200/80 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        <span>{sk}</span>
                        {selected && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    );
                  })}
                </div>
                <div className="pt-1">
                  <input
                    type="text"
                    placeholder="Other specific skill, trade, or topic (optional)..."
                    value={customSkill}
                    onChange={(e) => setCustomSkill(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-stone-900 text-xs text-stone-900 transition-colors"
                  />
                </div>
              </div>

              {/* Motivation */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700">
                  Why would you like to mentor with Boys 2 Men SA?
                </label>
                <textarea
                  rows={3}
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-stone-900 text-xs text-stone-900 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs shadow-xs flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Application</span>
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-5">
              <div className="w-12 h-12 mx-auto rounded-full bg-stone-200 text-stone-900 flex items-center justify-center">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-xl font-light font-display text-stone-900">
                  Application Sent to Boys 2 Men!
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-normal max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Your details have been dispatched to <strong>{ORG_DETAILS.contacts.generalEmail}</strong>. 
                  Our Secretariat (Zamamvula Cebekhulu) and leadership team will review your application and reach out to you directly.
                </p>
              </div>

              {/* Direct Mailto Button Backup */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 text-xs space-y-2 text-left">
                <span className="text-[11px] text-stone-400 font-bold uppercase tracking-wider block">
                  Application Summary
                </span>
                <div className="text-stone-700 space-y-0.5">
                  <p><strong>Applicant:</strong> {fullName} ({phone})</p>
                  <p><strong>Role:</strong> {roleLabels[roleType] || roleType}</p>
                  <p><strong>Sent to:</strong> {ORG_DETAILS.contacts.generalEmail}</p>
                </div>
                <div className="pt-2">
                  <a
                    href={buildMailtoUrl()}
                    className="inline-flex items-center gap-1.5 text-xs text-stone-900 font-semibold underline hover:text-stone-700"
                  >
                    <span>Click here if you need to open your email client again</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
