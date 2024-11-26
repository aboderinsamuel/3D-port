import PropTypes from 'prop-types';
import { Code, Database, Globe, Cpu } from 'lucide-react';
import ReactLogo from '/assets/react.svg';
import VueLogo from '/assets/vue-logo.png';
import AngularLogo from '/assets/angular-icon.png';
import JavaLogo from '/assets/java-logo.png';
import CppLogo from '/assets/cpp-logo.png';
import JSLogo from '/assets/javascript-logo.png';
import PythonLogo from '/assets/python.svg';
import TensorFlowLogo from '/assets/tensorflow.svg';
import GPTLogo from '/assets/gpt-logo.png';
import PostgreSQLLogo from '/assets/postgresql-logo.png';
import MongoDBLogo from '/assets/mongodb-logo.png';
import FirebaseLogo from '/assets/firebase-logo.png';
import DockerLogo from '/assets/docker.png';
import K8sLogo from '/assets/kubernetes-logo.png';
import AWSLogo from '/assets/aws-logo.png';
import JenkinsLogo from '/assets/jenkins-logo.png';
import TerraformLogo from '/assets/terraform-logo.png';
import GitLogo from '/assets/git-logo.png';
import TypeScriptLogo from '/assets/typescript-logo.png';
import ThreejsLogo from '/assets/Three.js.png';

const techLogoMap = {
  'React': <img src={ReactLogo} alt="React" className="w-5 h-5" />,
  'Vue.js': <img src={VueLogo} alt="Vue.js" className="w-5 h-5" />,
  'Angular': <img src={AngularLogo} alt="Angular" className="w-5 h-5" />,
  'Java': <img src={JavaLogo} alt="Java" className="w-5 h-5" />,
  'C++': <img src={CppLogo} alt="C++" className="w-5 h-5" />,
  'TypeScript': <img src={TypeScriptLogo} alt="TypeScript" className="w-5" />,
  'JavaScript': <img src={JSLogo} alt="JavaScript" className="w-5 h-5" />,
  'Python': <img src={PythonLogo} alt="Python" className="w-5 h-5" />,
  'TensorFlow': <img src={TensorFlowLogo} alt="TensorFlow" className="w-5 h-5" />,
  'GPT': <img src={GPTLogo} alt="GPT" className="w-5 h-5" />,
  'PostgreSQL': <img src={PostgreSQLLogo} alt="PostgreSQL" className="w-5 h-5" />,
  'MongoDB': <img src={MongoDBLogo} alt="MongoDB" className="w-5 h-5" />,
  'FireBase Auth': <img src={FirebaseLogo} alt="Firebase Auth" className="w-5 h-5" />,
  'Docker': <img src={DockerLogo} alt="Docker" className="w-5 h-5" />,
  'Kubernetes': <img src={K8sLogo} alt="Kubernetes" className="w-5 h-5" />,
  'AWS': <img src={AWSLogo} alt="AWS" className="w-5 h-5" />,
  'Jenkins': <img src={JenkinsLogo} alt="Jenkins" className="w-5 h-5" />,
  'Terraform': <img src={TerraformLogo} alt="Terraform" className="w-5 h-5" />,
  'Git': <img src={GitLogo} alt="Git" className="w-5 h-5" />,
  'Firebase Auth':  <img src={FirebaseLogo} alt="Firebase" className="w-5 h-5" />,
  'Three.js':  <img src={ThreejsLogo} alt="three.js" className="w-5 h-5" />,
};
// Define tech stacks with their respective categories
// Define tech stacks with their respective categories
const techStacks = [
  {
    name: "Frontend",
    icon: Code,
    technologies: ["React", "JavaScript", "TypeScript", "Three.js"],
  },
  {
    name: "Languages",
    icon: Database,
    technologies: ["Java", "C++", "Python",],
  },
  {
    name: "Databases",
    icon: Globe,
    technologies: ["PostgreSQL", "MongoDB", "Firebase Auth"],
  },
  {
    name: "DevOps",
    icon: Cpu,
    technologies: ["Docker", "Kubernetes", "AWS", "Git"],
  },
];

// WorkExperience component
const WorkExperience = ({ isLightMode }) => {
  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-8 text-center sm:text-4xl ${isLightMode ? 'text-black' : 'text-white'}`}>
          My Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              className={`grid-container p-6 rounded-lg shadow-md ${isLightMode ? 'bg-gray-200' : 'bg-gray-800'}`}
            >
              <div className="flex items-center mb-4">
                <stack.icon className={`w-8 h-8 mr-2 ${isLightMode ? 'text-black' : 'text-white'}`} />
                <h3 className={`text-xl font-semibold ${isLightMode ? 'text-black' : 'text-white'}`}>{stack.name}</h3>
              </div>
              <ul className="space-y-2">
                {stack.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center">
                    <span className="mr-2">
                      {techLogoMap[tech] || tech}
                    </span>
                    <span className={`${isLightMode ? 'text-black' : 'text-white'}`}>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Adding prop-types for validation
WorkExperience.propTypes = {
  isLightMode: PropTypes.bool.isRequired,
};

export default WorkExperience;