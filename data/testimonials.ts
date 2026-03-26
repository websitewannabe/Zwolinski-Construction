export interface Testimonial {
  name: string | null;
  text: string;
  rating: number;
  location: string;
  projectType: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Joseph R.",
    text: "Arnold is the best contractor that I have ever engaged for home remodeling or repairs over 45 years. I am very, very satisfied with his performance in remodeling three bathrooms. Arnold certainly aimed to please me with the selection of appliances and tile. The workmanship was exacting in every detail. The best was the fact that Arnold's crew provided all the remodeling services without my worrying about engaging other contractors to perform separate phases of the project. Arnold is a very capable and reliable contractor and I would certainly recommend him to any homeowner seeking perfection in job performance.",
    rating: 5,
    location: "Ambler, PA",
    projectType: "Bathroom Remodel",
  },
  {
    name: null,
    text: "Arnold was extremely polite, fair and true to his word on everything he promised. I would recommend him to anybody looking to make any home repairs. As far as price, I was completely shocked when he gave me his estimate as it was half of the quote I had received from the two previous contractors. With the lower quote I had half expected to get less quality but that wasn't the case at all. He and his team did an outstanding job. I am completely satisfied.",
    rating: 5,
    location: "Audubon, PA",
    projectType: "Bathroom Remodel",
  },
  {
    name: "James K.",
    text: "Zwolinski Quality Construction was excellent. They did exactly what we agreed upon in renovating our two bathrooms. The work crews showed up every day on time and worked all day. The work was completed in the predicted time span. They did excellent work. They were willing to make changes from our original contract when we indicated we changed our ideas about what we wanted. These changes did not affect our agreed upon cost for the project. We will definitely hire Zwolinski Construction in the future for our home renovation projects.",
    rating: 5,
    location: "Blue Bell, PA",
    projectType: "Bathroom Remodel",
  },
  {
    name: "Patrick M.",
    text: "Great we are using Zwolinski construction for the second bathroom and replacing exterior door. Will use again for other projects.",
    rating: 5,
    location: "Collegeville, PA",
    projectType: "Bathroom Remodel",
  },
  {
    name: "Chris B.",
    text: "Arnold and his crew are highly recommended. We initially contracted for two bathrooms to be remodeled. Both small, and had not been worked on since 1980. We had a limited budget and low expectations. Arnold's guidance and initial quote both met our budget and exceeded our expectation. While working there were very difficult obstacles - extremely poor existing construction, very old and bad dry wall, several changes and modifications. ZQC not only handled them all brilliantly, they came in UNDER BUDGET and OVER DELIVERED! Beautiful job. Would hire again and recommend enthusiastically and often. Clean, prompt, reliable, excellent.",
    rating: 5,
    location: "Collegeville, PA",
    projectType: "Bathroom Remodel",
  },
  {
    name: null,
    text: "Mr. Zwolinski and his team were outstanding! Easy to work with, quality work, done on time and within budget. The team is clean and friendly. From start to finish they completely finished my basement including a full kitchen, full bath and laundry room in three weeks. Approximately 1800 sq feet. My home is what I would call upscale, and now I have a lower level to match! Fantastic! Strongly recommend.",
    rating: 5,
    location: "Collegeville, PA",
    projectType: "Basement Remodel",
  },
  {
    name: "Saman H.",
    text: "Arnold and crew were very professional. Arnold took time to meet with us numerous times to understand the scope of our project. Arnold and team were experienced group of professionals that got the job done quickly and with minimum supervision. We can say that Zwolinski Quality Construction not only delivered quality product and service, but also exceeded our expectation.",
    rating: 5,
    location: "Collegeville, PA",
    projectType: "Basement Remodel",
  },
  {
    name: null,
    text: "Arnold and his team finished our 1200 square foot basement in just two weeks. They were here for at least 11 hours each day. They stayed later on occasion to get the job done. They were very easy to work with and very friendly. We requested last minute changes. They granted every request. The basement is beautiful! We have already recommended Zwolinski Quality construction to friends and family. Everyone who sees the basement is extremely impressed with the quality of the work and the timely fashion in which it was done.",
    rating: 5,
    location: "Downingtown, PA",
    projectType: "Basement Remodel",
  },
  {
    name: "Dianna B.",
    text: "Did quality work for a reasonable price. He and his crew always put in a full day's work. Within a week of our initial meeting, I had a detailed outline and cost for the project. He was the first of the four pros to get back to me. If I had to say anything negative...at the end he was behind his timeline and rushed the cleanup. We didn't have time to walk through the finished project. To his credit, he said if ANYTHING was not to my liking he would come back to correct it. I definitely would have him do my next project.",
    rating: 4,
    location: "Doylestown, PA",
    projectType: "Bathroom Remodel",
  },
  {
    name: null,
    text: "We did a complete remodel of two bathrooms (master bath and second full bath). This included complete gutting, moving plumbing and electric, enclosing a toilet, building walls, and fully tiling floors and walls. The work was completed in two weeks, Arnold Zwolinski and his team did a spectacular job and I couldn't recommend them higher. Beautiful workmanship done with amazing speed. Will absolutely use them again and have already recommended them to friends for any remodeling jobs.",
    rating: 5,
    location: "Doylestown, PA",
    projectType: "Bathroom Remodel",
  },
  {
    name: "Ken C.",
    text: "We are extremely pleased with the finished basement with bathroom and powder room remodel that Zwolinski Quality Construction completed in our house. Arnold and his crew are very hard workers. They have great ideas, always came to work on time and were very polite. The project was completed above our expectations as well as on time and within our budget.",
    rating: 5,
    location: "Gilbertsville, PA",
    projectType: "Bathroom Remodel",
  },
  {
    name: "John P.",
    text: "Excellent old world European quality and expert craftsmanship at very affordable prices. Arnold Zwolinski and his team did an outstanding job remodeling our master bathroom. The attention to detail and workmanship was second to none. The crew was professional, courteous, and always cleaned up at the end of the day. The project was completed on time and exceeded our expectations. I highly recommend Zwolinski Quality Construction to anyone looking for top-notch remodeling services.",
    rating: 5,
    location: "Harleysville, PA",
    projectType: "Bathroom Remodel",
  },
  {
    name: "Mary L.",
    text: "Arnold and his team transformed our outdated kitchen into a stunning modern space. Their expertise, attention to detail, and commitment to excellence were evident throughout the entire process. They worked efficiently, met the project deadline, and ensured everything was done to perfection. I would not hesitate to hire them again for future renovations.",
    rating: 5,
    location: "King of Prussia, PA",
    projectType: "Kitchen Remodel",
  },
  {
    name: "David S.",
    text: "Our experience with Zwolinski Quality Construction was absolutely fantastic. Arnold and his crew built a beautiful deck for us, and the quality of their work is incredible. They took the time to understand our vision and executed it flawlessly. The craftsmanship and materials used were top-notch. We now have the perfect outdoor space for our family to enjoy. Highly recommended!",
    rating: 5,
    location: "Lansdale, PA",
    projectType: "Deck Construction",
  },
  {
    name: "Emily R.",
    text: "We had our entire first floor renovated by Zwolinski Quality Construction, and the results were beyond our expectations. Arnold and his team were professional, hardworking, and meticulous in their work. They stayed within our budget and completed the project on time. I am beyond thrilled with the transformation of our home. Thank you!",
    rating: 5,
    location: "Norristown, PA",
    projectType: "Whole Home Remodel",
  },
  {
    name: "Michael T.",
    text: "Arnold and his team did a fantastic job finishing our basement. The work was completed ahead of schedule, and the quality was excellent. They handled every aspect of the job with professionalism and care. The finished basement has added so much value and livable space to our home. I will definitely be hiring them again for future projects!",
    rating: 5,
    location: "Phoenixville, PA",
    projectType: "Basement Remodel",
  },
  {
    name: "Sarah K.",
    text: "Zwolinski Quality Construction replaced our old, worn-out siding with beautiful, high-quality materials. The transformation was amazing! The team was reliable, punctual, and dedicated to delivering great results. We are extremely happy with the outcome and would absolutely hire them again for future home improvements.",
    rating: 5,
    location: "Pottstown, PA",
    projectType: "Siding Replacement",
  },
];

export const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=zwolinski+quality+construction#lrd=0x89c6a05cc01b6e05:0x4f72758643065789,1";

export const HOMEADVISOR_REVIEW_URL =
  "https://www.homeadvisor.com/rated.ZWOLINSKIQuality.8386546.html";
