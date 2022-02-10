import React from "react";

const ContentArea = () => {
    return(
        <div id="content-area">
            <div className="heading">
                <h1> DashBoard</h1>
                <p>Welcome to GoJobs job seeker dashboard</p>
            </div>

            <div className="cards">
                <div className="card col-md-4">
                    <div class="user-img"></div>
                    <span className="user-name">John Doe </span>
                    <span className="user-title">Full Stack Web Developer</span>
                    <hr/>
                    <div className="col-md-3">
                        <span className="education">Education</span>
                    </div>                    
                    <div className="col-md-9">
                    <span className="schools">San Diego High School</span>
                    <br/>
                    <span className="schools">UC San Diego</span>
                    </div>

                </div>

                <div className="card col-md-4">
                    <h6>Interview Schedule</h6>
                    <span className="date">Jul 7, 2021</span>
                        <div className="col-md-2">
                            <span className="job-type">IT</span>
                        </div>                    
                        <div className="col-md-10">
                            <span className="location">Best Buy HQ</span>
                            <span className="position">Senior Developer</span>
                            <span className="time">09:30 am</span>
                        </div>

                            <div className="col-md-2">
                                <span className="job-type-os">OS</span>
                            </div>                    
                            <div className="col-md-10">
                                <span className="location">Online Shopping e-commerce</span>
                                <span className="position">Senior UI/UX Designer</span>
                                <span className="time">01:00 pm</span>
                            </div>
        
                        
                </div>

                <div className="card col-md-4">
                <h6>This is where the chart goes!<br/> You might want to use chart JS for this one to visualize the data on the front end</h6>
                </div>
            </div>
           
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>JObs</th>
                        <th>End of Application</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Online Shopping</td>
                    <td>Java Developer</td>
                    <td>July 28, 2018</td>
                    <td>San Diego, CA</td>
                    </tr>

                    <tr>
                    <td>Online Shopping</td>
                    <td>Java Developer</td>
                    <td>July 28, 2018</td>
                    <td>San Diego, CA</td>
                    </tr>

                    <tr>
                    <td>Online Shopping</td>
                    <td>Java Developer</td>
                    <td>July 28, 2018</td>
                    <td>San Diego, CA</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default ContentArea;