// EMI Calculator
function calculateEMI() {
    const principal = parseFloat(document.getElementById('loanAmount').value);
    const annualRate = parseFloat(document.getElementById('interestRate').value);
    const years = parseFloat(document.getElementById('loanTenure').value);
    
    if (!principal || !annualRate || !years) {
        alert('Please fill all fields');
        return;
    }
    
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
               (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;
    
    document.getElementById('monthlyEMI').textContent = '₹' + emi.toFixed(2);
    document.getElementById('principalAmount').textContent = '₹' + principal.toFixed(2);
    document.getElementById('totalInterest').textContent = '₹' + totalInterest.toFixed(2);
    document.getElementById('totalPayment').textContent = '₹' + totalPayment.toFixed(2);
    
    document.getElementById('emiResults').style.display = 'block';
    
    // Create chart
    const ctx = document.getElementById('emiChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Principal Amount', 'Total Interest'],
            datasets: [{
                data: [principal, totalInterest],
                backgroundColor: ['#1a3a5f', '#f8b500'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'white'
                    }
                }
            }
        }
    });
}

// Gold Loan Calculator
function calculateGoldLoan() {
    const weight = parseFloat(document.getElementById('goldWeight').value);
    const purity = parseFloat(document.getElementById('goldPurity').value);
    const rate = parseFloat(document.getElementById('goldRate').value);
    
    if (!weight || !purity || !rate) {
        alert('Please fill all fields');
        return;
    }
    
    const pureGold = weight * (purity / 24);
    const goldValue = pureGold * rate;
    const eligibleLoan = goldValue * 0.75; // 75% LTV
    
    document.getElementById('goldValue').textContent = '₹' + goldValue.toFixed(2);
    document.getElementById('eligibleLoan').textContent = '₹' + eligibleLoan.toFixed(2);
    
    document.getElementById('goldResults').style.display = 'block';
    
    // Create chart
    const ctx = document.getElementById('goldChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Eligible Loan (75%)', 'Remaining Value (25%)'],
            datasets: [{
                data: [eligibleLoan, goldValue - eligibleLoan],
                backgroundColor: ['#f8b500', '#e63946'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'white'
                    }
                }
            }
        }
    });
}

// Insurance Calculator
function calculateInsurance() {
    const sumAssured = parseFloat(document.getElementById('sumAssured').value);
    const premium = parseFloat(document.getElementById('annualPremium').value);
    const term = parseFloat(document.getElementById('policyTerm').value);
    
    if (!sumAssured || !premium || !term) {
        alert('Please fill all fields');
        return;
    }
    
    const totalPremiums = premium * term;
    const coverageRatio = sumAssured / totalPremiums;
    const costOfCoverage = premium / (sumAssured / 100000);
    
    document.getElementById('totalPremiums').textContent = '₹' + totalPremiums.toFixed(2);
    document.getElementById('coverageRatio').textContent = coverageRatio.toFixed(1) + 'x';
    document.getElementById('costOfCoverage').textContent = '₹' + costOfCoverage.toFixed(2) + ' per ₹1L';
    
    document.getElementById('insuranceResults').style.display = 'block';
    
    // Create chart
    const ctx = document.getElementById('insuranceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sum Assured', 'Total Premiums'],
            datasets: [{
                label: 'Amount (₹)',
                data: [sumAssured, totalPremiums],
                backgroundColor: ['#1a3a5f', '#f8b500'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            }
        }
    });
}

// Education Loan Calculator
function calculateEducationLoan() {
    const courseFee = parseFloat(document.getElementById('courseFee').value);
    const rate = parseFloat(document.getElementById('eduInterestRate').value);
    const moratorium = parseFloat(document.getElementById('moratorium').value);
    const repaymentYears = parseFloat(document.getElementById('repaymentPeriod').value);
    
    if (!courseFee || !rate || !moratorium || !repaymentYears) {
        alert('Please fill all fields');
        return;
    }
    
    // Simple interest during moratorium
    const moratoriumInterest = courseFee * (rate / 100) * moratorium;
    const totalAmount = courseFee + moratoriumInterest;
    
    // EMI calculation for repayment period
    const monthlyRate = rate / 12 / 100;
    const repaymentMonths = repaymentYears * 12;
    
    const emi = (totalAmount * monthlyRate * Math.pow(1 + monthlyRate, repaymentMonths)) / 
               (Math.pow(1 + monthlyRate, repaymentMonths) - 1);
    
    const totalRepayment = emi * repaymentMonths;
    const totalInterest = totalRepayment - courseFee;
    
    document.getElementById('eduEMI').textContent = '₹' + emi.toFixed(2);
    document.getElementById('eduTotalInterest').textContent = '₹' + totalInterest.toFixed(2);
    document.getElementById('eduTotalRepayment').textContent = '₹' + totalRepayment.toFixed(2);
    
    document.getElementById('educationResults').style.display = 'block';
    
    // Create chart
    const ctx = document.getElementById('educationChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Course Fee', 'Total Interest'],
            datasets: [{
                data: [courseFee, totalInterest],
                backgroundColor: ['#1a3a5f', '#f8b500'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'white'
                    }
                }
            }
        }
    });
}

// Function to scroll to calculators section
function scrollToCalculators() {
    // Scroll to the calculators section
    document.getElementById('calculators-hero').scrollIntoView({ behavior: 'smooth' });
    
    // Activate the EMI tab (first tab)
    const emiTab = document.getElementById('emi-tab');
    const tab = new bootstrap.Tab(emiTab);
    tab.show();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});