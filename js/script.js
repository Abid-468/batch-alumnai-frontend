/**
 * Batch Alumni Directory — Frontend script
 * Dummy data and dynamic rendering, search + filter.
 */

(function () {
    'use strict';

    var students = [
        {
            name: 'Priya Sharma',
            city: 'Bangalore',
            profession: 'Senior Software Engineer',
            image: 'https://i.pravatar.cc/400?img=1',
            facebook: '#',
            linkedin: '#',
            github: '#'
        },
        {
            name: 'Rahul Mehta',
            city: 'Mumbai',
            profession: 'Product Manager',
            image: 'https://i.pravatar.cc/400?img=2',
            facebook: '#',
            linkedin: '#',
            github: '#'
        },
        {
            name: 'Anita Krishnan',
            city: 'Chennai',
            profession: 'UX Designer',
            image: 'https://i.pravatar.cc/400?img=3',
            facebook: '#',
            linkedin: '#',
            github: '#'
        },
        {
            name: 'Vikram Joshi',
            city: 'Hyderabad',
            profession: 'Data Scientist',
            image: 'https://i.pravatar.cc/400?img=4',
            facebook: '#',
            linkedin: '#',
            github: '#'
        },
        {
            name: 'Sneha Patel',
            city: 'Bangalore',
            profession: 'Backend Developer',
            image: 'https://i.pravatar.cc/400?img=5',
            facebook: '#',
            linkedin: '#',
            github: '#'
        },
        {
            name: 'Arjun Reddy',
            city: 'Delhi',
            profession: 'DevOps Engineer',
            image: 'https://i.pravatar.cc/400?img=6',
            facebook: '#',
            linkedin: '#',
            github: '#'
        },
        {
            name: 'Kavya Nair',
            city: 'Pune',
            profession: 'Frontend Developer',
            image: 'https://i.pravatar.cc/400?img=9',
            facebook: '#',
            linkedin: '#',
            github: '#'
        },
        {
            name: 'Rohan Singh',
            city: 'Mumbai',
            profession: 'Full Stack Engineer',
            image: 'https://i.pravatar.cc/400?img=8',
            facebook: '#',
            linkedin: '#',
            github: '#'
        },
        {
            name: 'Divya Menon',
            city: 'Kochi',
            profession: 'ML Engineer',
            image: 'https://i.pravatar.cc/400?img=10',
            facebook: '#',
            linkedin: '#',
            github: '#'
        },
        {
            name: 'Aditya Verma',
            city: 'Bangalore',
            profession: 'Tech Lead',
            image: 'https://i.pravatar.cc/400?img=11',
            facebook: '#',
            linkedin: '#',
            github: '#'
        }
    ];

    var searchNameEl = document.getElementById('search-name');
    var filterCityEl = document.getElementById('filter-city');
    var studentsGridEl = document.getElementById('students-grid');
    var noResultsEl = document.getElementById('no-results');

    function getUniqueCities() {
        var seen = {};
        return students
            .map(function (s) { return s.city; })
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
        var options = filterCityEl.querySelectorAll('option');
        for (var i = 1; i < options.length; i++) {
            options[i].remove();
        }
        cities.forEach(function (city) {
            var opt = document.createElement('option');
            opt.value = city;
            opt.textContent = city;
            filterCityEl.appendChild(opt);
        });
    }

    function filterStudents() {
        var nameQuery = (searchNameEl && searchNameEl.value) ? searchNameEl.value.trim().toLowerCase() : '';
        var cityValue = (filterCityEl && filterCityEl.value) ? filterCityEl.value : '';

        return students.filter(function (s) {
            var matchName = !nameQuery || s.name.toLowerCase().indexOf(nameQuery) !== -1;
            var matchCity = !cityValue || s.city === cityValue;
            return matchName && matchCity;
        });
    }

    function renderStudentCard(student) {
        var card = document.createElement('article');
        card.className = 'student-card';

        var imageWrap = document.createElement('div');
        imageWrap.className = 'student-card-image-wrap';

        var img = document.createElement('img');
        img.className = 'student-card-image';
        img.src = student.image;
        img.alt = student.name;
        imageWrap.appendChild(img);

        var body = document.createElement('div');
        body.className = 'student-card-body';

        var nameEl = document.createElement('h3');
        nameEl.className = 'student-card-name';
        nameEl.textContent = student.name;

        var professionEl = document.createElement('p');
        professionEl.className = 'student-card-profession';
        professionEl.textContent = student.profession;

        var cityEl = document.createElement('p');
        cityEl.className = 'student-card-city';
        cityEl.textContent = student.city;

        var social = document.createElement('div');
        social.className = 'student-card-social';
        [
            { url: student.facebook, label: 'Facebook', icon: 'f' },
            { url: student.linkedin, label: 'LinkedIn', icon: 'in' },
            { url: student.github, label: 'GitHub', icon: 'gh' }
        ].forEach(function (item) {
            var a = document.createElement('a');
            a.href = item.url;
            a.setAttribute('aria-label', item.label);
            a.textContent = item.icon;
            social.appendChild(a);
        });

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'student-card-btn';
        btn.textContent = 'View Profile';

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

        studentsGridEl.innerHTML = '';

        if (filtered.length === 0) {
            if (noResultsEl) {
                noResultsEl.hidden = false;
            }
            return;
        }

        if (noResultsEl) noResultsEl.hidden = true;
        filtered.forEach(function (student) {
            studentsGridEl.appendChild(renderStudentCard(student));
        });
    }

    function handleSearchAndFilter() {
        var filtered = filterStudents();
        renderStudents(filtered);
    }

    function initMobileMenu() {
        var toggle = document.querySelector('.navbar-toggle');
        var menu = document.querySelector('.navbar-menu');
        if (!toggle || !menu) return;

        toggle.addEventListener('click', function () {
            toggle.classList.toggle('is-active');
            menu.classList.toggle('is-open');
        });

        menu.querySelectorAll('.navbar-link, .navbar-btn').forEach(function (link) {
            link.addEventListener('click', function () {
                toggle.classList.remove('is-active');
                menu.classList.remove('is-open');
            });
        });
    }

    function init() {
        fillCityFilter();
        handleSearchAndFilter();

        if (searchNameEl) {
            searchNameEl.addEventListener('input', handleSearchAndFilter);
        }
        if (filterCityEl) {
            filterCityEl.addEventListener('change', handleSearchAndFilter);
        }

        initMobileMenu();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
