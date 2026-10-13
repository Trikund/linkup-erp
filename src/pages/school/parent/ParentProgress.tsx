import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  TrendingUp, Award, Heart, Brain, Activity, Sparkles, 
  CheckCircle2, Download, ShieldCheck, Star, Users, Flame
} from 'lucide-react';

interface DomainMetric {
  skill: string;
  score: number;
  level: 'Advanced' | 'Proficient' | 'Developing';
  description: string;
}

interface ChildHPC {
  name: string;
  className: string;
  house: string;
  bmi: string;
  height: string;
  weight: string;
  vision: string;
  bloodGroup: string;
  communityHours: string;
  cognitive: DomainMetric[];
  socioEmotional: DomainMetric[];
  achievements: { title: string; date: string; category: string; badge: string }[];
  selfReflection: string;
  peerFeedback: string;
  careerAptitude: string;
}

const hpcData: Record<'rahul' | 'ananya', ChildHPC> = {
  rahul: {
    name: 'Rahul Sharma',
    className: 'Class 10-A',
    house: 'Tagore House (Blue)',
    bmi: '19.1 kg/m² (Healthy)',
    height: '168 cm',
    weight: '54 kg',
    vision: '6/6 Normal (Both Eyes)',
    bloodGroup: 'O+ Positive',
    communityHours: '18 / 20 Hours Completed',
    cognitive: [
      { skill: 'Logical & Mathematical Deduction', score: 92, level: 'Advanced', description: 'Solves multi-step algebraic and trigonometric problems independently.' },
      { skill: 'Scientific Inquiry & Lab Experimentation', score: 87, level: 'Proficient', description: 'Formulates clear hypotheses and logs accurate lab metrics.' },
      { skill: 'Computational & Algorithmic Thinking', score: 95, level: 'Advanced', description: 'Demonstrates high proficiency in Python scripting and SQL databases.' },
      { skill: 'Critical Reading & Argumentation', score: 89, level: 'Proficient', description: 'Articulates structured viewpoints in debates and formal essays.' },
    ],
    socioEmotional: [
      { skill: 'Collaborative Teamwork & Peer Support', score: 94, level: 'Advanced', description: 'Readily mentors classmates during group tutorials and lab work.' },
      { skill: 'Leadership & Decision Making', score: 90, level: 'Advanced', description: 'Leads the school robotics squad and junior cricket team effectively.' },
      { skill: 'Emotional Resilience & Exam Composure', score: 86, level: 'Proficient', description: 'Remains calm under academic pressure and adapts to feedback.' },
      { skill: 'Civic Responsibility & Eco-Consciousness', score: 92, level: 'Advanced', description: 'Spearheaded the Tagore House plastic-free campus drive.' },
    ],
    achievements: [
      { title: 'Vice-Captain — Zonal U-16 Cricket Winners', date: 'Sep 2026', category: 'Sports Excellence', badge: 'Gold Trophy' },
      { title: '1st Runner-Up — Inter-DPS Coding Hackathon', date: 'Aug 2026', category: 'STEM & Tech', badge: 'Silver Medal' },
      { title: '100% Punctuality & Discipline Star Badge', date: 'Jul 2026', category: 'School Values', badge: 'Merit Pin' },
    ],
    selfReflection: 'This term, I thoroughly enjoyed building our automated library database in Information Technology and proving trigonometric identities. My goal for Term 2 is to improve my speed in organic chemistry equations.',
    peerFeedback: 'Rahul is always approachable when anyone is stuck on a tough math problem or Python code bug. He keeps the group motivated during science lab sessions.',
    careerAptitude: 'Strong inclination toward Engineering, Computer Science, Data Analytics & Quantitative Research (Recommended Stream: PCM with CS).',
  },
  ananya: {
    name: 'Ananya Sharma',
    className: 'Class 7-B',
    house: 'Gandhi House (Green)',
    bmi: '17.4 kg/m² (Healthy)',
    height: '144 cm',
    weight: '36 kg',
    vision: '6/6 Normal',
    bloodGroup: 'B+ Positive',
    communityHours: '15 / 15 Hours Completed',
    cognitive: [
      { skill: 'Creative Expression & Visual Visualization', score: 96, level: 'Advanced', description: 'Exceptional spatial imagination in both fine arts and biology models.' },
      { skill: 'Natural Science Curiosity', score: 93, level: 'Advanced', description: 'Keen observer of plant taxonomy and microscopic structures.' },
      { skill: 'Numerical Operations & Fractions', score: 90, level: 'Advanced', description: 'Strong mental math speed and neat stepwise geometry.' },
      { skill: 'Bilingual Communication (English & Hindi)', score: 92, level: 'Advanced', description: 'Fluent reader and expressive speaker in elocution and poetry.' },
    ],
    socioEmotional: [
      { skill: 'Empathy, Kindness & Inclusivity', score: 97, level: 'Advanced', description: 'Warm, welcoming, and deeply considerate toward all peers.' },
      { skill: 'Classroom Mindfulness & Active Listening', score: 94, level: 'Advanced', description: 'Highly attentive and asks insightful questions in class.' },
      { skill: 'Group Harmony & Conflict Resolution', score: 91, level: 'Advanced', description: 'Brings positive energy to group art and science projects.' },
      { skill: 'Environmental Stewardship', score: 95, level: 'Advanced', description: 'Maintains the Class 7-B herbarium and medicinal plant corner.' },
    ],
    achievements: [
      { title: '1st Prize — District Watercolor Landscape Meet', date: 'Oct 2026', category: 'Fine Arts', badge: 'Gold Medal' },
      { title: 'Best Science Working Model (Plant vs Animal Cell)', date: 'Sep 2026', category: 'STEM Discovery', badge: 'First Rank' },
      { title: 'Lead Vocalist — Independence Day School Choir', date: 'Aug 2026', category: 'Performing Arts', badge: 'Commendation' },
    ],
    selfReflection: 'I loved painting the sunrise landscape for the district art competition and making the 3D clay plant cell model. Next term, I want to learn Scratch animation coding.',
    peerFeedback: 'Ananya shares her art supplies with everyone and makes our group charts look amazing. She is very polite and helpful.',
    careerAptitude: 'High creative and scientific synthesis — strong foundation across Design, Life Sciences, Architecture, and Literature.',
  }
};

export const ParentProgress: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState<'rahul' | 'ananya'>('rahul');
  const [parentObservation, setParentObservation] = useState('');
  const [savedNote, setSavedNote] = useState<string | null>(
    'Maintains a disciplined 2-hour evening self-study routine at home and balances outdoor sports well.'
  );

  const data = hpcData[selectedChild];

  const handleSaveObservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentObservation.trim()) return;
    setSavedNote(parentObservation);
    setParentObservation('');
    alert('Your parent observation has been recorded in the NEP 2020 Holistic Progress Card!');
  };

  return (
    <SchoolLayout
      role="parent"
      user={USERS.parent}
      title="Holistic Progress Card (HPC)"
      description="CBSE NEP 2020 360-degree evaluation of cognitive competencies, socio-emotional skills, physical wellness, and creative portfolios."
    >
      <div className="space-y-6">
        {/* Top Banner & Child Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 rounded-full text-xs font-bold">
              NEP 2020 Compliant
            </span>
            <span className="text-xs text-gray-500">360° Multidimensional Assessment</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Holistic Progress Card (HPC)</h1>
          <p className="text-sm text-gray-600 mt-0.5">
            Comprehensive evaluation of cognitive competencies, socio-emotional skills, physical wellness, and creative portfolios.
          </p>
        </div>

        {/* Child Selector */}
        <div className="flex items-center bg-gray-100 p-1 rounded-xl border border-gray-200">
          <button
            onClick={() => setSelectedChild('rahul')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedChild === 'rahul'
                ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">R</div>
            <span>Rahul (10-A)</span>
          </button>
          <button
            onClick={() => setSelectedChild('ananya')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedChild === 'ananya'
                ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-xs font-bold">A</div>
            <span>Ananya (7-B)</span>
          </button>
        </div>
      </div>

      {/* Physical Health & Vitality Strip */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-600" />
            Physical Health, Fitness & SEWA Portfolio (Annual Infirmary Checkup)
          </h3>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            Medically Fit • Active
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-xs text-gray-500">Height / Weight</div>
            <div className="text-sm font-bold text-gray-900 mt-0.5">{data.height} • {data.weight}</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-xs text-gray-500">Body Mass Index</div>
            <div className="text-sm font-bold text-emerald-700 mt-0.5">{data.bmi}</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-xs text-gray-500">Vision Screening</div>
            <div className="text-sm font-bold text-gray-900 mt-0.5">{data.vision}</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-xs text-gray-500">Blood Group</div>
            <div className="text-sm font-bold text-rose-600 mt-0.5">{data.bloodGroup}</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-xs text-gray-500">School House</div>
            <div className="text-sm font-bold text-indigo-700 mt-0.5">{data.house}</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <div className="text-xs text-gray-500">SEWA Social Service</div>
            <div className="text-sm font-bold text-purple-700 mt-0.5">{data.communityHours}</div>
          </div>
        </div>
      </div>

      {/* Cognitive & Socio-Emotional Domains Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cognitive Domain */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-600" />
                Domain 1: Cognitive & Intellectual Competencies
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Critical thinking, problem-solving, and analytical mastery</p>
            </div>
          </div>

          <div className="space-y-4">
            {data.cognitive.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-900 text-sm">{item.skill}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded font-semibold">
                      {item.level}
                    </span>
                    <span className="font-bold text-gray-900">{item.score}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${item.score}%` }} />
                </div>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Socio-Emotional Domain */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500" />
                Domain 2: Socio-Emotional & Ethical Values
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Empathy, teamwork, resilience, and civic responsibility</p>
            </div>
          </div>

          <div className="space-y-4">
            {data.socioEmotional.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-900 text-sm">{item.skill}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded font-semibold">
                      {item.level}
                    </span>
                    <span className="font-bold text-gray-900">{item.score}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${item.score}%` }} />
                </div>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Co-Curricular Honors & 360 Reflections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Honors & Badges */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Portfolio Honours & Co-Curricular Badges
          </h3>
          <div className="space-y-3">
            {data.achievements.map((ach, i) => (
              <div key={i} className="p-3.5 bg-amber-50/50 border border-amber-100 rounded-xl flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    {ach.category}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 pt-1">{ach.title}</h4>
                  <p className="text-xs text-gray-500">{ach.date}</p>
                </div>
                <span className="px-2.5 py-1 bg-white border border-amber-200 rounded-lg text-xs font-bold text-amber-800 shadow-2xs flex-shrink-0">
                  {ach.badge}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-purple-50 rounded-xl border border-purple-100 space-y-1">
            <div className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-600" /> Mentor's Aptitude & Stream Observation
            </div>
            <p className="text-xs text-purple-800 leading-relaxed">{data.careerAptitude}</p>
          </div>
        </div>

        {/* Right: 360-Degree Reflections (Self, Peer, Parent) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            360-Degree Participatory Reflections (Student, Peer & Parent)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100 space-y-1.5">
              <div className="text-xs font-bold text-blue-900">Student's Self-Reflection</div>
              <p className="text-xs text-gray-700 italic leading-relaxed">"{data.selfReflection}"</p>
            </div>

            <div className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-1.5">
              <div className="text-xs font-bold text-emerald-900">Peer Group Appreciation</div>
              <p className="text-xs text-gray-700 italic leading-relaxed">"{data.peerFeedback}"</p>
            </div>
          </div>

          {/* Parent Input Section */}
          <div className="pt-2 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Parent's Recorded Observation in HPC</span>
              <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Synced with Class Mentor
              </span>
            </div>

            {savedNote && (
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-700 italic">
                "{savedNote}" — <strong>Mrs. Priya Sharma</strong>
              </div>
            )}

            <form onSubmit={handleSaveObservation} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={parentObservation}
                onChange={(e) => setParentObservation(e.target.value)}
                placeholder="Add or update your observation on home routine & hobbies..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap"
              >
                Update Parent Note
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </SchoolLayout>
  );
};
