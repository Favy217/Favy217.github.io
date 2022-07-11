	// load the js at start 
	 document.addEventListener("DOMContentLoaded", function (event){
	 			fetch("http://localhost:5000/getAll")
				 	.then(response => response.json())
					.then(data => loadJobData(data['data']));
					//radio();
					
					function loadJobData(data){
						if (data == "" || data === null){
							//job not found
							jobBoard.innerHTML = "<tr><td>No Job Found</td></tr>";
						}
						else{
						let jobHTML = ""; var x = 0;
data.forEach(function ({id, companyName, role, jobDescription, salary, jobType, location, category, link, dateAdded}){
								if(x == 0){
								jobHTML += "<thead>"
								jobHTML += "<th>Company</th>";
								jobHTML += "<th>Role</th>";
								jobHTML += "<th>Description</th>";
								jobHTML += "<th>Salary</th>";
								jobHTML += "<th>Type</th>";
								jobHTML += "<th>Location</th>";
								jobHTML += "<th>Category</th>";
								jobHTML += "<th>Link</th>"
								jobHTML += "</thead>"
								}; x++;
																
								jobHTML += "<tr>";
								//jobHTML += `<td> ${id} </td>`;
								jobHTML += `<td> ${companyName} </td>`;
								jobHTML += `<td> ${role} </td>`;
								jobHTML += `<td> ${jobDescription} </td>`;
								jobHTML += `<td> ${salary} </td>`;
								jobHTML += `<td> ${jobType} </td>`;
								jobHTML += `<td> ${location} </td>`;
								jobHTML += `<td> ${category} </td>`;
								//jobHTML += `<td> ${dateAdded} </td>`;
								
								// create button that connects to mysql link value
								jobHTML += `<td><button onclick="window.open('${link}')">Apply</button></td>`;
								jobHTML += "</tr>";

							});
												
							jobBoard.innerHTML = jobHTML;	
							jobBoard.style.display = "block";
							
						}						
				}
			//const errorElement = document.getElementById('error');

			document.querySelector("#job").addEventListener("click", postJob);
			const jobBoard = document.querySelector('.jobBoard');
			var br = document.createElement("br");
			
			 function postJob(){
				 //create a form dynamically
				 var form = document.createElement('form');
				 form.setAttribute("id", "formShow");
				 form.setAttribute("method", 'post');
				 form.setAttribute("action", "http://localhost:5000/insert");
				 form.addEventListener('submit', (e) =>{
					e.preventDefault();
				});

				 //create inside elements for the form				 
				 var company = document.createElement('input');
				//  company.createElement('label');
				 company.setAttribute("id","company");
				 company.setAttribute("type", "text");
				 company.setAttribute("name", "company");
				 company.setAttribute("placeholder", "Company Name");
				 company.style.margin = "15px";
				 company.style.width = "500px";
				 company.style.height = "30px";
				 company.style.border = "2px solid black";
				 company.style.borderRadius = "5px";
				 company.style.padding = "5px";
				 company.style.fontSize = "15px";
				 company.style.textAlign = "center";
				 company.style.fontFamily = "Arial";
				 company.style.marginLeft = "350px";
				 company.setAttribute("label", "Company Name");

				 var role = document.createElement('input');
				 role.setAttribute("id","role");
				 role.setAttribute("type", "text");
				 role.setAttribute("name", "role");
				 role.setAttribute("placeholder", "Job Role");
				 role.style.margin = "15px";
				 role.style.width = "500px";
				 role.style.height = "30px";
				 role.style.border = "2px solid black";
				 role.style.borderRadius = "5px";
				 role.style.padding = "5px";
				 role.style.fontSize = "15px";
				 role.style.textAlign = "center";
				 role.style.fontFamily = "Arial";
				 role.style.marginLeft = "350px";

				 var job_description = document.createElement('input');
				 job_description.setAttribute("id","job_description");
				 job_description.setAttribute("type", "text");
				 job_description.setAttribute("name", "job_description");
				 job_description.setAttribute("placeholder", "Job Description");
				 job_description.style.margin = "15px";
				 job_description.style.width = "500px";
				 job_description.style.height = "90px";
				 job_description.style.border = "2px solid black";
				 job_description.style.borderRadius = "5px";
				 job_description.style.padding = "5px";
				 job_description.style.fontSize = "15px";
				 job_description.style.textAlign = "center";
				 job_description.style.fontFamily = "Arial";
				 job_description.style.marginLeft = "350px";
				 		 


				//  var role_detail = document.createElement('input');
				//  role_detail.setAttribute("id","role_detail");
				//  role_detail.setAttribute("type", "text");
				//  role_detail.setAttribute("name", "role_detail");
				//  role_detail.setAttribute("placeholder", "Role Detail");

				 var salary = document.createElement('input');
				 salary.setAttribute("id","salary");
				 salary.setAttribute("type", "text");
				 salary.setAttribute("name", "salary");
				 salary.setAttribute("placeholder", "Salary");
				 salary.style.margin = "15px";
				 salary.style.width = "200px";
				 salary.style.height = "30px";
				 salary.style.border = "2px solid black";
				 salary.style.borderRadius = "5px";
				 salary.style.padding = "5px";
				 salary.style.fontSize = "15px";
				 salary.style.textAlign = "center";
				 salary.style.fontFamily = "Arial";
				 salary.style.marginLeft = "350px";

				 //create option element
				 var jobType = document.createElement('select');
				 jobType.setAttribute("id","jobType");
				 jobType.setAttribute("name", "jobType");
				 jobType.setAttribute("placeholder", "Job Type");
				 jobType.style.margin = "15px";
				 jobType.style.width = "200px";
				 jobType.style.height = "30px";
				 jobType.style.border = "2px solid black";
				 jobType.style.borderRadius = "5px";
				 jobType.style.padding = "5px";
				 jobType.style.fontSize = "15px";
				 jobType.style.textAlign = "center";
				 jobType.style.fontFamily = "Arial";
				 jobType.style.marginLeft = "350px";
				 //loop through the job type array and create option element
				 var jobtype = ["Full Time", "Part Time", "Contract", "Internship", "Volunteer"];
				 
				 jobtype.forEach(element => {
					var option = document.createElement('option');
					option.setAttribute("value", element);
					option.innerHTML = element;
					jobType.appendChild(option);
				 });

				 var location = document.createElement('select');
				 location.setAttribute("id","location");
				 location.setAttribute("type", "text");
				 location.setAttribute("name", "location");
				 location.setAttribute("placeholder", "Location");
				 const States = ["Abia", "Abuja", "Adamawa", "AkwaIbom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "CrossRiver", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"];
				 //loop through the States array and create option element
				 States.forEach(element => {
					var option = document.createElement('option');
					option.setAttribute("value", element);
					option.innerHTML = element;
					location.appendChild(option);
				 });

				 var category = document.createElement('select');
				 category.setAttribute("id","category");
				 category.setAttribute("type", "text");
				 category.setAttribute("name", "category");
				 category.setAttribute("placeholder", "Category");
				 var Category_list = ["Analyst", "Designer", "Developer", "Manager", "Salesperson"];
				 // loop through the category array and create option element
				 Category_list.forEach(element => {
					var option = document.createElement('option');
					option.setAttribute("value", element);
					option.innerHTML = element;
					category.appendChild(option);
				 });

				 var jobLink = document.createElement('input');
				 jobLink.setAttribute("id","jobLink");
				 jobLink.setAttribute("type", "link");
				 jobLink.setAttribute("name", "jobLink");
				 jobLink.setAttribute("placeholder", "Job Link");


				 var posts = document.createElement("input");
               	 posts.setAttribute("id","posts");
				 posts.setAttribute("type", "button");
               	 posts.setAttribute("value", "Submit");
				 posts.addEventListener('click', addJob);
				//  posts.addEventListener('click', closeForm);

				 var removeForm = document.createElement("input");
				 removeForm.setAttribute("id","removeForm");
				 removeForm.setAttribute("type", "button");
               	 removeForm.setAttribute("value", "Close");
				 removeForm.addEventListener('click', closeForm);
								
				 function closeForm(){
					form.remove();
					}
				 {
				//append input elements to form
				form.appendChild(company);
                 
                // Inserting a line break
                form.appendChild(br.cloneNode());
                 
                form.appendChild(role);
                 form.appendChild(br.cloneNode());

                form.appendChild(job_description);
                 form.appendChild(br.cloneNode());
                 
                // form.appendChild(role_detail);
                //  form.appendChild(br.cloneNode());
                 
                form.appendChild(salary);
                 form.appendChild(br.cloneNode());

				form.appendChild(jobType);
                 form.appendChild(br.cloneNode());

				form.appendChild(location);
                 form.appendChild(br.cloneNode());

				form.appendChild(category);
                 form.appendChild(br.cloneNode());

				form.appendChild(jobLink);
				 form.appendChild(br.cloneNode());
                 
                // Append the submit button to the form
                form.appendChild(posts);
				form.appendChild(br.cloneNode());

				form.appendChild(removeForm);
				form.appendChild(br.cloneNode());
				 }

				 //append form to document
				 document.body.appendChild(form);
			}
			
						 function addJob() {
						const company = document.getElementById('company'); //assigning a variable to hold the id
				 		const role = document.getElementById('role');
				 		const job_description = document.getElementById('job_description');
				 		const salary = document.getElementById('salary');
						const jobType = document.getElementById('jobType');
						const location = document.getElementById('location');
						const category = document.getElementById('category');
						const jobLink = document.getElementById('jobLink'); 

						//  let messages = [];
						// if(company.value === '' || company.value == null){
						// 	messages.push('Company name is required');
						// }
						// if(role.value === '' || role.value == null){
						// 	messages.push('Role is required');
						// }
						// if(job_description.value === '' || job_description.value == null){
						// 	messages.push('Job Description is required');
						// }
						
						// if(salary.value === '' || salary.value == null){
						// 	messages.push('Salary is required');
						// }
						// if(jobType.value === '' || jobType.value == null){
						// 	messages.push('Job type is required');
						// }
						// if(location.value === '' || location.value == null){
						// 	messages.push('Company name is required');
						// }
						// if(category.value === '' || category.value == null){
						// 	messages.push('Company name is required');
						// }
						// if(jobLink.value === '' || jobLink.value == null){
						// 	messages.push('Job link is required');
						// }

						// if (messages.length > 0){
						// 				e.preventDefault();
						// 				errorElement.innerText = messages.join(', ');
						// 				}

						var compan = company.value;
						var rol = role.value;
						var job_des = job_description.value;
						//var role_det = role_detail.value;
						var sal = salary.value;
						var jobT = jobType.value;
						var loc = location.value;
						var cat = category.value;
						var jobL = jobLink.value;
					
						fetch('http://localhost:5000/insert', {
							headers : {
								'Content-type' : 'application/json'
							},
							method : 'POST',
							body : JSON.stringify({
								company: compan,
								role: rol,
								job_description: job_des,
								salary: sal,
								jobType: jobT,
								location: loc,
								category: cat,
								jobLink: jobL
							})
						}).then(response => response.json())
						.then(data => {
							window.location.reload();
							alert('Job added successfully');
						}).catch(function(error){
							console.log(error);
						});
						}

					// });
					// 	tempForm = document.getElementById("formShow");
					// 	tempForm.remove();
					// 	}
					

					document.getElementById("b1").addEventListener('click', radio);
					var fulltime = document.getElementById("Fulltime");
					var parttime = document.getElementById("Parttime");
					var contract = document.getElementById("Contract");
					var internship = document.getElementById("Internship");
					var volunteer = document.getElementById("Volunteer");

					var analyst = document.getElementById("Analyst");
					var designer = document.getElementById("Designer");
					var developer = document.getElementById("Developer");
					var manager = document.getElementById("Manager");
					var SalesPerson = document.getElementById("SalesPerson");
					
					//manipulate html radio button
					function radio(e) {
						//prevent default action
						e.preventDefault();
						//check if radio button is checked
					
						if (fulltime.checked) {
							fetch('http://localhost:5000/filterJob/full time')
							.then(response => response.json())
							.then(data => loadJobData(data['data']));
					}
					else if (parttime.checked){
						fetch('http://localhost:5000/filterJob/part time')
						.then(response => response.json())
						.then(data  => loadJobData(data['data']));
					}
					else if (contract.checked){
						fetch('http://localhost:5000/filterJob/contract')
						.then(response => response.json())
						.then(data => loadJobData(data['data']));
					}
					else if(internship.checked){
						fetch('http://localhost:5000/filterJob/internship')
						.then(response => response.json())
						.then(data => loadJobData(data['data']));
					}
					else if(volunteer.checked){
						fetch('http://localhost:5000/filterJob/volunteer')
						.then(response => response.json())
						.then(data => loadJobData(data['data']));
					}

					//filter checkbox category
					if (analyst.checked) {
						fetch('http://localhost:5000/filterCategory/analyst')
						.then(response => response.json())
						.then(data => loadJobData(data['data']));

					}
					else if (designer.checked){
						fetch('http://localhost:5000/filterCategory/designer')
						.then(response => response.json())
						.then(data => loadJobData(data['data']));
					}
					else if (developer.checked){
						fetch('http://localhost:5000/filterCategory/developer')
						.then(response => response.json())
						.then(data => loadJobData(data['data']));
					}
					else if (manager.checked){
						fetch('http://localhost:5000/filterCategory/manager')
						.then(response => response.json())
						.then(data => loadJobData(data['data']));
					}
					else if (SalesPerson.checked){
						fetch('http://localhost:5000/filterCategory/SalesPerson')
						.then(response => response.json())
						.then(data => loadJobData(data['data']));
					}
				}


				//validate external http links
				function validateURL(textval) {
					var messages = [];
					var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*([a-zA-Z0-9-]+\.)([a-zA-Z]{2,}|[a-zA-Z0-9-]+)(\.([a-zA-Z]{2,}|[a-zA-Z0-9-]+))*)*:(?:\d+)?(\/[^\s]*)*$/;
					//integrate validateURL with jobL
				if(textval === '' || textval == null){
					messages.push('Job link is required');
				}
				if(textval !== '' || textval != null){
					if(!validateURL(textval)){
						messages.push('Job link is not valid');
					}
				}
				if(messages.length > 0){
								e.preventDefault();
								errorElement.innerText = messages.join(', ');
								}
				if(messages.length === 0){
					return urlregex.test(textval);
				}
			}

			//validate salary
			function validateSalary(textval) {
				var messages = [];
				var salaryregex = /^\d+$/;
				if(textval === '' || textval == null){
					messages.push('Salary is required');
				}
				if(textval !== '' || textval != null){
					if(!salaryregex.test(textval)){
						messages.push('Salary is not valid');
					}
				}
				if(messages.length > 0){
								e.preventDefault();
								errorElement.innerText = messages.join(', ');
								}
				if(messages.length === 0){
					return salaryregex.test(textval);
				}
			}


			//filter element through searching
			const searchbox = document.getElementById('searchbox');
			//filter jobBoard table as search box is typed
			searchbox.addEventListener('keyup', function() {
				var searchText = searchbox.value.toLowerCase();
				//var jobTable = document.getElementsByClassName('jobBoard');
				var tr = jobBoard.getElementsByTagName('tr');
				for (var i = 0; i < tr.length; i++) {
					var td0 = tr[i].getElementsByTagName('td')[0];
					var td1 = tr[i].getElementsByTagName('td')[1];
					var td5 = tr[i].getElementsByTagName('td')[5];
					if (td0 || td1 || td5) {
						if (td0.innerHTML.toLowerCase().indexOf(searchText) > -1 || td1.innerHTML.toLowerCase().indexOf(searchText) > -1 || td5.innerHTML.toLowerCase().indexOf(searchText) > -1) {
							tr[i].style.display = '';
						} else {
							tr[i].style.display = 'none';
						}
						}
				}
			});

			//filter select option by selecting option
			const select = document.getElementById('select');
			select.addEventListener('change', function(e){
				e.preventDefault();
				//fetch recentlyadded
				//Check which is selected
				if(select.value === 'Recently listed'){
				fetch('http://localhost:5000/recently')
				.then(response => response.json())
				.then(data => loadJobData(data['data']));
				}
				else if(select.value === 'Oldest'){
					fetch('http://localhost:5000/oldest')
					.then(response => response.json())
					.then(data => loadJobData(data['data']));
				}
				else if(select.value === 'Highest pay'){
					fetch('http://localhost:5000/highestPay')
					.then(response => response.json())
					.then(data => loadJobData(data['data']));
				}
				else if(select.value === 'Lowest pay'){
					fetch('http://localhost:5000/lowestPay')
					.then(response => response.json())
					.then(data => loadJobData(data['data']));
				}
			});

		});
	
