import React from 'react';
import "./styles/services.css"
import {Link as LinkR} from "react-router-dom"

function Services() {

    return (
        <div className="services main-container">
            <h1 className='services title'>Our Services</h1>
            <hr />
            <div className='services primary-container'>
                <div className='services secondary-container'>
                    <h1 class="services container-title">FireStop Estimate and Report</h1>
                    <div class="services container-button-price">
                        <p className='price'>$250</p>
                        <LinkR to="/contact">
                        <button class="services booknow">Book Now</button>
                        </LinkR>
                    </div>
                </div>
                <div className='services secondary-container'>
                    <p class="services sellpoint">•Brush and defensible space inspection</p>
                    <p class="services sellpoint">•Gutter and vent inspection</p>
                    <p class="services sellpoint">•Fire prevention equipment inspection</p>
                    <p class="services sellpoint">•Full detailed FireStop report and improvment Estimate</p>
                    <p class="services sellpoint">•Inspection cost put toward improvements</p>
                </div>
                <div className='services secondary-container'>
                    <div class="services third-half-container">
                        <h2 class="motto-title">Protect your family and home with firestop</h2>
                    </div>
                    <p class="motto">Serving the north county area for fire Protection and prevention</p>
                    <div class="services third-half-container">

                    </div>
                </div>
            </div>

            <div class="services primary-info-container">
                <h1 class="services info-title">Whats in a FireStop Inspetion?</h1>
                <div>


                    <h2 class="infoheader">Property Assessment:</h2>
                    <p class="infoheader">•
                        Evaluation of the property's location, surroundings, and topography.
                        Identification of nearby vegetation, forests, or grasslands that could pose wildfire risks.
                    </p>

                    <h2 class="infoheader">Home Exterior Assessment:</h2>
                    <p class="infoheader">•
                        Inspection of the home's exterior to identify potential vulnerabilities to wildfires, such as flammable building materials.
                        Assessment of roof materials and gutters for debris accumulation.
                    </p>

                    <h2 class="infoheader">Landscaping and Yard Assessment:</h2>
                    <p class="infoheader">•
                        Examination of landscaping elements, including trees, shrubs, and other vegetation, to identify potential fire hazards.
                        Recommendations for maintaining defensible space around the property, which may include pruning trees, removing dead vegetation, and creating a firebreak.
                    </p>

                    <h2 class="infoheader">Firebreak and Buffer Zone Recommendations:</h2>
                    <p class="infoheader">•Suggestions for creating a defensible space or buffer zone between the property and nearby vegetation to reduce the risk of fire spreading to the home.</p>

                    <h2 class="infoheader">Irrigation and Water Supply:</h2>
                    <p class="infoheader">•Evaluation of the property's water sources, such as wells, ponds, or irrigation systems, and recommendations for their use in fire mitigation efforts.</p>

                    <h2 class="infoheader">Fire-Resistant Landscaping:</h2>
                    <p class="infoheader">•Recommendations for using fire-resistant plants and landscaping materials to reduce the risk of fire spreading.</p>

                    <h2 class="infoheader">Home Hardening Recommendations:</h2>
                    <p class="infoheader">•Suggestions for retrofitting the home with fire-resistant materials and features, such as ember-resistant vents, window screens, and exterior siding.</p>

                    <h2 class="infoheader">Emergency Access and Evacuation Plans:</h2>
                    <p class="infoheader">•
                        Evaluation of the property's access for emergency vehicles and recommendations for improvements if needed.
                        Discussion of evacuation plans and strategies for homeowners.
                    </p>
                    <h2 class="infoheader">Documentation and Reporting:</h2>
                    <p class="infoheader">•
                        Preparation of a detailed inspection report that outlines findings, recommendations, and suggested improvements.
                        Provision of photographic evidence and illustrations to support the inspection report.
                    </p>
                    <h2 class="infoheader">Cost Estimates:</h2>
                    <p class="infoheader">•If applicable, estimates for the cost of implementing recommended improvements or landscaping changes.</p>
                    <h2 class="infoheader">Regulatory Compliance:</h2>
                    <p class="infoheader">•Information about local regulations and ordinances related to wildfire safety and compliance with those requirements.</p>
                    <h2 class="infoheader">Follow-Up Services:</h2>
                    <p class="infoheader">•Offer of ongoing maintenance and follow-up services to ensure the property remains safe from wildfire risks.</p>
                </div>
            </div>
        </div>

    );
}

export default Services;