/**
 * Batch Alumni Directory — Frontend script
 * Dummy data and dynamic rendering, search + filter.
 */

(function () {
  "use strict";

  var students = [
    {
      name: "Priya Sharma",
      city: "Bangalore",
      profession: "Senior Software Engineer",
      image: "https://i.pravatar.cc/400?img=1",
      facebook: "#",
      linkedin: "#",
      github: "#",
      roll: "CSE20XX001",
      company: "TechCorp",
      currentLocation: "Bangalore",
      email: "priya.sharma@example.com",
      phone: "+91 98765 43210",
      hometown: "Jaipur",
      bloodGroup: "B+",
      university: "State Engineering College",
      department: "Computer Science & Engineering",
      batch: "2020",
      school: "St. Mary's High School",
      college: "State Engineering College",
      parentsName: "Mr. Ramesh Sharma & Mrs. Sunita Sharma",
      interests: "Reading, Trekking, Photography",
      workSector: "Technology",
      bio: "Senior software engineer with 8+ years of experience in distributed systems. Led multiple product launches at TechCorp. Love mentoring juniors and contributing to open source in my free time.",
    },
    {
      name: "Rahul Mehta",
      city: "Mumbai",
      profession: "Product Manager",
      image: "https://i.pravatar.cc/400?img=2",
      facebook: "#",
      linkedin: "#",
      github: "#",
      roll: "CSE20XX002",
      company: "FinTech Solutions",
      currentLocation: "Mumbai",
      email: "rahul.mehta@example.com",
      phone: "+91 98765 43211",
      hometown: "Delhi",
      bloodGroup: "O+",
      university: "State Engineering College",
      department: "Computer Science & Engineering",
      batch: "2020",
      school: "Delhi Public School",
      college: "State Engineering College",
      parentsName: "Mr. Vikram Mehta & Mrs. Pooja Mehta",
      interests: "Cricket, Podcasts, Travel",
      workSector: "Technology",
      bio: "Product manager with a strong technical background. Focused on B2B SaaS and growth. Previously at two startups; now leading product at a fintech company in Mumbai.",
    },
    {
      name: "Anita Krishnan",
      city: "Chennai",
      profession: "UX Designer",
      image: "https://i.pravatar.cc/400?img=3",
      facebook: "#",
      linkedin: "#",
      github: "#",
      roll: "CSE20XX003",
      company: "HealthTech Design Studio",
      currentLocation: "Chennai",
      email: "anita.krishnan@example.com",
      phone: "+91 98765 43212",
      hometown: "Coimbatore",
      bloodGroup: "A+",
      university: "State Engineering College",
      department: "Computer Science & Engineering",
      batch: "2020",
      school: "Kendriya Vidyalaya",
      college: "State Engineering College",
      parentsName: "Mr. S. Krishnan & Mrs. Lakshmi Krishnan",
      interests: "Sketching, Yoga, Cooking",
      workSector: "Technology",
      bio: "UX designer with a focus on accessibility and user research. Worked with design studios and in-house teams. Currently leading design at a health-tech startup in Chennai.",
    },
    {
      name: "Vikram Joshi",
      city: "Hyderabad",
      profession: "Data Scientist",
      image: "https://i.pravatar.cc/400?img=4",
      facebook: "#",
      linkedin: "#",
      github: "#",
      roll: "CSE20XX004",
      company: "E-Commerce Analytics Inc.",
      currentLocation: "Hyderabad",
      email: "vikram.joshi@example.com",
      phone: "+91 98765 43213",
      hometown: "Pune",
      bloodGroup: "AB+",
      university: "State Engineering College",
      department: "Computer Science & Engineering",
      batch: "2020",
      school: "Bharatiya Vidya Bhavan",
      college: "State Engineering College",
      parentsName: "Mr. Ashok Joshi & Mrs. Meera Joshi",
      interests: "Chess, Running, Blogging",
      workSector: "Technology",
      bio: "Data scientist with an MS in CS. Specialising in ML pipelines and recommendation systems. Published a few papers; now building analytics products at a large e-commerce company.",
    },
    {
      name: "Sneha Patel",
      city: "Bangalore",
      profession: "Backend Developer",
      image: "https://i.pravatar.cc/400?img=5",
      facebook: "#",
      linkedin: "#",
      github: "#",
      roll: "CSE20XX005",
      company: "CloudScale Systems",
      currentLocation: "Bangalore",
      email: "sneha.patel@example.com",
      phone: "+91 98765 43214",
      hometown: "Vadodara",
      bloodGroup: "A+",
      university: "State Engineering College",
      department: "Computer Science & Engineering",
      batch: "2020",
      school: "Navrachana School",
      college: "State Engineering College",
      parentsName: "Mr. Rajesh Patel & Mrs. Nita Patel",
      interests: "Guitar, Hiking, Open source",
      workSector: "Technology",
      bio: "Backend developer passionate about system design and performance. Contributes to Apache projects and loves solving scaling challenges. Based in Bangalore for the last 5 years.",
    },
    {
      name: "Arjun Reddy",
      city: "Delhi",
      profession: "DevOps Engineer",
      image: "https://i.pravatar.cc/400?img=6",
      facebook: "#",
      linkedin: "#",
      github: "#",
      roll: "CSE20XX006",
      company: "DevOps Pro",
      currentLocation: "Delhi",
      email: "arjun.reddy@example.com",
      phone: "+91 98765 43215",
      hometown: "Vijayawada",
      bloodGroup: "B+",
      university: "State Engineering College",
      department: "Computer Science & Engineering",
      batch: "2020",
      school: "Chinmaya Vidyalaya",
      college: "State Engineering College",
      parentsName: "Mr. Venkatesh Reddy & Mrs. Padma Reddy",
      interests: "Gaming, Automation scripts, Music",
      workSector: "Technology",
      bio: "DevOps engineer with expertise in Kubernetes and cloud-native tooling. Helped multiple teams adopt CI/CD and observability. Currently with a product company in Delhi NCR.",
    },
    {
      name: "Kavya Nair",
      city: "Pune",
      profession: "Frontend Developer",
      image: "https://i.pravatar.cc/400?img=9",
      facebook: "#",
      linkedin: "#",
      github: "#",
      roll: "CSE20XX007",
      company: "SaaS Design Co.",
      currentLocation: "Pune",
      email: "kavya.nair@example.com",
      phone: "+91 98765 43216",
      hometown: "Thiruvananthapuram",
      bloodGroup: "O+",
      university: "State Engineering College",
      department: "Computer Science & Engineering",
      batch: "2020",
      school: "Bhavan's Vidya Mandir",
      college: "State Engineering College",
      parentsName: "Mr. Suresh Nair & Mrs. Indira Nair",
      interests: "UI experiments, Dance, Travel",
      workSector: "Technology",
      bio: "Frontend developer with a keen eye for design and performance. Strong advocate for accessibility and modern CSS. Working on design systems at a SaaS company in Pune.",
    },
    {
      name: "Rohan Singh",
      city: "Mumbai",
      profession: "Full Stack Engineer",
      image: "https://i.pravatar.cc/400?img=8",
      facebook: "#",
      linkedin: "#",
      github: "#",
      roll: "CSE20XX008",
      company: "StartupHub",
      currentLocation: "Mumbai",
      email: "rohan.singh@example.com",
      phone: "+91 98765 43217",
      hometown: "Lucknow",
      bloodGroup: "A+",
      university: "State Engineering College",
      department: "Computer Science & Engineering",
      batch: "2020",
      school: "St. Xavier's High School",
      college: "State Engineering College",
      parentsName: "Mr. Amar Singh & Mrs. Rekha Singh",
      interests: "Football, Reading, Side projects",
      workSector: "Technology",
      bio: "Full stack engineer who enjoys owning features from DB to UI. Started in startups and now part of a growing team in Mumbai. Occasionally speaks at local meetups.",
    },
    {
      name: "Divya Menon",
      city: "Kochi",
      profession: "ML Engineer",
      image: "https://i.pravatar.cc/400?img=10",
      facebook: "#",
      linkedin: "#",
      github: "#",
      roll: "CSE20XX009",
      company: "AI Research Labs",
      currentLocation: "Kochi",
      email: "divya.menon@example.com",
      phone: "+91 98765 43218",
      hometown: "Kozhikode",
      bloodGroup: "B+",
      university: "State Engineering College",
      department: "Computer Science & Engineering",
      batch: "2020",
      school: "Sacred Heart CGHSS",
      college: "State Engineering College",
      parentsName: "Mr. Gopal Menon & Mrs. Usha Menon",
      interests: "Painting, Badminton, Podcasts",
      workSector: "Technology",
      bio: "ML engineer with research experience in NLP. Focused on bringing models to production and ensuring they are explainable. Based in Kochi, working remotely for a global team.",
    },
    {
      name: "Aditya Verma",
      city: "Bangalore",
      profession: "Tech Lead",
      image: "https://i.pravatar.cc/400?img=11",
      facebook: "#",
      linkedin: "#",
      github: "#",
      roll: "CSE20XX010",
      company: "Enterprise Tech Solutions",
      currentLocation: "Bangalore",
      email: "aditya.verma@example.com",
      phone: "+91 98765 43219",
      hometown: "Ranchi",
      bloodGroup: "O+",
      university: "State Engineering College",
      department: "Computer Science & Engineering",
      batch: "2020",
      school: "DPS R.K. Puram",
      college: "State Engineering College",
      parentsName: "Mr. Sanjay Verma & Mrs. Ritu Verma",
      interests: "Coding, Mentoring, Running",
      workSector: "Technology",
      bio: "Tech lead with 10+ years in software. Led platform and infra teams; now heading engineering for a key vertical. Passionate about mentoring and engineering culture.",
    },
  ];

  var searchNameEl = document.getElementById("search-name");
  var filterCityEl = document.getElementById("filter-city");
  var studentsGridEl = document.getElementById("students-grid");
  var noResultsEl = document.getElementById("no-results");
  var profileModalEl = document.getElementById("profile-modal");
  var lastFilteredStudents = [];

  function getUniqueCities() {
    var seen = {};
    return students
      .map(function (s) {
        return s.city;
      })
      .filter(function (city) {
        if (seen[city]) return false;
        seen[city] = true;
        return true;
      })
      .sort();
  }

  function fillCityFilter() {
    if (!filterCityEl) return;
    var cities = getUniqueCities();
    var options = filterCityEl.querySelectorAll("option");
    for (var i = 1; i < options.length; i++) {
      options[i].remove();
    }
    cities.forEach(function (city) {
      var opt = document.createElement("option");
      opt.value = city;
      opt.textContent = city;
      filterCityEl.appendChild(opt);
    });
  }

  function filterStudents() {
    var nameQuery =
      searchNameEl && searchNameEl.value
        ? searchNameEl.value.trim().toLowerCase()
        : "";
    var cityValue =
      filterCityEl && filterCityEl.value ? filterCityEl.value : "";

    return students.filter(function (s) {
      var matchName =
        !nameQuery || s.name.toLowerCase().indexOf(nameQuery) !== -1;
      var matchCity = !cityValue || s.city === cityValue;
      return matchName && matchCity;
    });
  }

  function renderStudentCard(student, index) {
    var card = document.createElement("article");
    card.className = "student-card";
    if (typeof index === "number") {
      card.setAttribute("data-student-index", String(index));
    }

    var imageWrap = document.createElement("div");
    imageWrap.className = "student-card-image-wrap";

    var img = document.createElement("img");
    img.className = "student-card-image";
    img.src = student.image;
    img.alt = student.name;
    imageWrap.appendChild(img);

    var body = document.createElement("div");
    body.className = "student-card-body";

    var nameEl = document.createElement("h3");
    nameEl.className = "student-card-name";
    nameEl.textContent = student.name;

    var professionEl = document.createElement("p");
    professionEl.className = "student-card-profession";
    professionEl.textContent = student.profession;

    var cityEl = document.createElement("p");
    cityEl.className = "student-card-city";
    cityEl.textContent = student.city;

    var social = document.createElement("div");
    social.className = "student-card-social";
    [
      { url: student.facebook, label: "Facebook", icon: "f" },
      { url: student.linkedin, label: "LinkedIn", icon: "in" },
      { url: student.github, label: "GitHub", icon: "gh" },
    ].forEach(function (item) {
      var a = document.createElement("a");
      a.href = item.url;
      a.setAttribute("aria-label", item.label);
      a.textContent = item.icon;
      social.appendChild(a);
    });

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "student-card-btn";
    btn.textContent = "View Profile";

    body.appendChild(nameEl);
    body.appendChild(professionEl);
    body.appendChild(cityEl);
    body.appendChild(social);
    body.appendChild(btn);

    card.appendChild(imageWrap);
    card.appendChild(body);
    return card;
  }

  function renderStudents(filtered) {
    if (!studentsGridEl) return;

    studentsGridEl.innerHTML = "";

    if (filtered.length === 0) {
      if (noResultsEl) {
        noResultsEl.hidden = false;
      }
      return;
    }

    if (noResultsEl) noResultsEl.hidden = true;
    lastFilteredStudents = filtered;
    filtered.forEach(function (student, i) {
      studentsGridEl.appendChild(renderStudentCard(student, i));
    });
  }

  function setModalText(id, value) {
    var el = document.getElementById(id);
    if (!el) return;
    if (value != null && String(value).trim() !== "") {
      el.textContent = value;
    } else {
      el.textContent = "—";
    }
  }

  function setModalLink(id, href, text) {
    var el = document.getElementById(id);
    if (!el || el.tagName.toLowerCase() !== "a") return;
    el.href = href || "#";
    if (text) {
      el.textContent = text;
    }
  }

  function openProfileModal(student) {
    if (!profileModalEl || !student) return;

    // Set header image
    var modalImage = document.getElementById("modal-image");
    if (modalImage) {
      modalImage.src = student.image || "";
      modalImage.alt = student.name || "";
    }

    // Set header fields
    setModalText("modal-name", student.name);
    setModalText("modal-profession", student.profession);
    setModalText("modal-roll", student.roll);

    // Set quick info grid
    setModalText("modal-company", student.company);
    setModalText("modal-current-location", student.currentLocation || student.city);
    setModalText("modal-hometown", student.hometown);
    setModalText("modal-blood-group", student.bloodGroup);
    setModalText("modal-phone", student.phone);

    // Set email link
    var emailEl = document.getElementById("modal-email");
    if (emailEl) {
      if (student.email) {
        emailEl.href = "mailto:" + student.email;
        emailEl.textContent = student.email;
      } else {
        emailEl.href = "#";
        emailEl.textContent = "—";
      }
    }

    // Set education fields
    setModalText("modal-university", student.university);
    setModalText("modal-department", student.department);
    setModalText("modal-batch", student.batch);
    setModalText("modal-school", student.school);
    setModalText("modal-college", student.college);

    // Set family
    setModalText("modal-parents-name", student.parentsName);

    // Set interests & work
    setModalText("modal-interests", student.interests);
    setModalText("modal-work-sector", student.workSector);

    // Set about section
    setModalText("modal-bio", student.bio);

    // Set social links
    var linkedinEl = document.getElementById("modal-linkedin");
    if (linkedinEl) {
      linkedinEl.href = student.linkedin || "#";
    }

    var githubEl = document.getElementById("modal-github");
    if (githubEl) {
      githubEl.href = student.github || "#";
    }

    var facebookEl = document.getElementById("modal-facebook");
    if (facebookEl) {
      facebookEl.href = student.facebook || "#";
    }

    // Show modal
    profileModalEl.removeAttribute("hidden");
    profileModalEl.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    profileModalEl.classList.add("profile-modal--open");

    var contentBox = profileModalEl.querySelector(".profile-modal__content");
    if (contentBox) {
      contentBox.classList.add("profile-modal__content--open");
    }

    // Focus management
    var closeBtn = profileModalEl.querySelector(".profile-modal-close");
    if (closeBtn) {
      setTimeout(function () {
        closeBtn.focus();
      }, 100);
    }
  }

  function closeProfileModal() {
    if (!profileModalEl) return;

    profileModalEl.setAttribute("hidden", "");
    profileModalEl.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    profileModalEl.classList.remove("profile-modal--open");

    var contentBox = profileModalEl.querySelector(".profile-modal__content");
    if (contentBox) {
      contentBox.classList.remove("profile-modal__content--open");
    }
  }

  function initProfileModal() {
    if (!profileModalEl) return;

    // Set initial state
    profileModalEl.setAttribute("aria-hidden", "true");

    // Close on backdrop click
    var backdrop = profileModalEl.querySelector(".profile-modal__backdrop");
    if (backdrop) {
      backdrop.addEventListener("click", closeProfileModal);
    }

    // Close on clicking outside content (on modal itself)
    profileModalEl.addEventListener("click", function (e) {
      if (e.target === profileModalEl) {
        closeProfileModal();
      }
    });

    // Prevent content clicks from closing modal
    var contentBox = profileModalEl.querySelector(".profile-modal__content");
    if (contentBox) {
      contentBox.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }

    // Close button
    var closeBtn = profileModalEl.querySelector(".profile-modal-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeProfileModal();
      });
    }

    // ESC key handler
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" || e.keyCode === 27) {
        if (profileModalEl && !profileModalEl.hasAttribute("hidden")) {
          closeProfileModal();
        }
      }
    });
  }

  function initViewProfileDelegation() {
    if (!studentsGridEl) return;

    studentsGridEl.addEventListener("click", function (e) {
      // Find the clicked button
      var btn = e.target.closest(".student-card-btn");
      if (!btn) return;

      // Find the parent card
      var card = btn.closest(".student-card");
      if (!card) return;

      // Get student index from data attribute
      var indexStr = card.getAttribute("data-student-index");
      if (indexStr === null || indexStr === "") return;

      var index = parseInt(indexStr, 10);
      if (isNaN(index) || index < 0) return;

      // Get student from filtered list
      var student = lastFilteredStudents[index];
      if (student) {
        openProfileModal(student);
      }
    });
  }

  function handleSearchAndFilter() {
    var filtered = filterStudents();
    renderStudents(filtered);
  }

  function initMobileMenu() {
    var toggle = document.querySelector(".navbar-toggle");
    var menu = document.querySelector(".navbar-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      toggle.classList.toggle("is-active");
      menu.classList.toggle("is-open");
    });

    menu.querySelectorAll(".navbar-link, .navbar-btn").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.classList.remove("is-active");
        menu.classList.remove("is-open");
      });
    });
  }

  function init() {
    fillCityFilter();
    handleSearchAndFilter();

    if (searchNameEl) {
      searchNameEl.addEventListener("input", handleSearchAndFilter);
    }
    if (filterCityEl) {
      filterCityEl.addEventListener("change", handleSearchAndFilter);
    }

    initMobileMenu();
    initProfileModal();
    initViewProfileDelegation();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
