import { Employee } from '../models/employee.model';

export const EMPLOYEES: Employee[] = [
  {
    id: 'dr-john-smith',
    slug: 'dr-john-smith',
    name: 'Dr. John Smith',
    title: 'Chief Dental Surgeon',
    shortDescription: 'With over 15 years of experience in advanced dental procedures, Dr. Smith specializes in cosmetic dentistry and smile transformations.',
    fullDescription: 'Dr. John Smith is our Chief Dental Surgeon with over 15 years of experience in advanced dental procedures. He specializes in cosmetic dentistry and smile transformations, helping patients achieve their dream smiles through cutting-edge techniques and personalized care. Dr. Smith completed his dental degree at Harvard School of Dental Medicine and has since become a leading expert in aesthetic dentistry. His passion for excellence and commitment to patient satisfaction have earned him numerous accolades and the trust of thousands of patients. When he\'s not transforming smiles, Dr. Smith enjoys teaching at dental conferences and mentoring young dentists.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    routerLink: '/employee/dr-john-smith'
  },
  {
    id: 'dr-sarah-johnson',
    slug: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    title: 'Orthodontist',
    shortDescription: 'Dr. Johnson is an expert in orthodontics with a passion for creating beautiful, healthy smiles through innovative treatment methods.',
    fullDescription: 'Dr. Sarah Johnson is a highly skilled orthodontist with a passion for creating beautiful, healthy smiles through innovative treatment methods. With expertise in both traditional braces and modern clear aligner systems, Dr. Johnson customizes treatment plans to meet each patient\'s unique needs and lifestyle. She graduated from Columbia University College of Dental Medicine and completed her orthodontic residency at NYU. Dr. Johnson stays at the forefront of orthodontic technology, regularly attending international conferences and implementing the latest techniques in her practice. Her gentle approach and dedication to patient comfort make her especially popular with both children and adults seeking orthodontic care.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    routerLink: '/employee/dr-sarah-johnson'
  },
  {
    id: 'dr-michael-chen',
    slug: 'dr-michael-chen',
    name: 'Dr. Michael Chen',
    title: 'Pediatric Dentist',
    shortDescription: 'Specializing in pediatric dentistry, Dr. Chen creates a comfortable environment for children and provides gentle, comprehensive dental care.',
    fullDescription: 'Dr. Michael Chen specializes in pediatric dentistry, creating a warm and comfortable environment where children feel safe and excited about dental care. His gentle approach and fun personality help young patients develop positive associations with dental visits that last a lifetime. Dr. Chen earned his dental degree from UCSF School of Dentistry and completed specialized training in pediatric dentistry at Boston Children\'s Hospital. He has a special interest in preventive care and early orthodontic intervention. Outside the clinic, Dr. Chen volunteers at local schools to teach children about proper oral hygiene and the importance of healthy teeth. His dedication to making dental care enjoyable for kids has made him a favorite among families in our community.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    routerLink: '/employee/dr-michael-chen'
  },
  {
    id: 'dr-emily-rodriguez',
    slug: 'dr-emily-rodriguez',
    name: 'Dr. Emily Rodriguez',
    title: 'Periodontist',
    shortDescription: 'Dr. Rodriguez focuses on gum health and periodontal treatments, helping patients maintain optimal oral health for life.',
    fullDescription: 'Dr. Emily Rodriguez is our expert periodontist who focuses on gum health and periodontal treatments. With a deep understanding of the connection between oral health and overall wellness, she helps patients maintain optimal oral health for life. Dr. Rodriguez graduated from the University of Pennsylvania School of Dental Medicine and completed her periodontal specialty training at the University of Michigan. She is board-certified and specializes in both surgical and non-surgical treatments for gum disease, as well as dental implant placement. Dr. Rodriguez believes in a conservative, patient-centered approach and takes time to educate her patients about the importance of periodontal health. Her caring demeanor and clinical expertise have helped countless patients overcome gum disease and maintain healthy smiles.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    routerLink: '/employee/dr-emily-rodriguez'
  }
];

export function getEmployeeBySlug(slug: string): Employee | undefined {
  return EMPLOYEES.find(e => e.slug === slug);
}

export function getAllEmployees(): Employee[] {
  return EMPLOYEES;
}
