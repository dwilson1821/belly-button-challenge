# Belly Button Biodiversity Dashboard  

## Overview  

This project involves building an interactive dashboard to explore the **Belly Button Biodiversity** dataset. This dataset catalogs the microbes (operational taxonomic units, or OTUs) found in human navels. The goal is to create visualizations that provide insights into the distribution and prevalence of these microbes.  

Key deliverables include:  
- A horizontal bar chart of the top 10 OTUs per individual.  
- A bubble chart showing the abundance of OTUs.  
- A metadata panel displaying demographic information for selected samples.  
- Dynamic interactivity via dropdown menus and event listeners.  

The dashboard is deployed via **GitHub Pages**.  

---

## Repository Structure  

The repository is organized as follows:  

```  
belly-button-challenge/  
│  
├── static/  
│   ├── js/  
│   │   └── app.js             # JavaScript for creating charts and interactivity  
│   └── css/  
│       └── styles.css         # Optional custom styles  
│  
├── index.html                 # Main HTML file for the dashboard  
├── samples.json               # Dataset (provided for reference, hosted remotely)  
├── README.md                  # Project documentation  
├── .gitignore                 # Excluded files from version control  
└── screenshots/               # Screenshots of the deployed dashboard (optional)  
    ├── bar_chart.png  
    ├── bubble_chart.png  
    └── metadata_panel.png  
```  

---

## Features  

### 1. Horizontal Bar Chart  
- Displays the **top 10 OTUs** for the selected sample.  
- **X-axis**: Sample values (abundance of OTUs).  
- **Y-axis**: OTU IDs (labeled as `OTU <id>`).  
- **Hovertext**: OTU labels.  
- Dropdown menu updates the bar chart based on the selected sample.  

### 2. Bubble Chart  
- Visualizes the distribution of OTUs for the selected sample.  
- **X-axis**: OTU IDs.  
- **Y-axis**: Sample values.  
- **Marker size**: Sample values (abundance).  
- **Marker color**: OTU IDs.  
- **Hovertext**: OTU labels.  

### 3. Demographic Information Panel  
- Displays metadata for the selected sample.  
- Metadata includes demographic details like age, gender, and location.  
- Key-value pairs are dynamically appended to the panel using JavaScript.  

### 4. Dynamic Updates  
- All charts and panels update dynamically based on the selected sample from the dropdown menu.  

---

## Deployment  

The dashboard is deployed via **GitHub Pages**.  

### Access the Live Dashboard:  
[Deployed Dashboard Link](https://your-username.github.io/belly-button-challenge)  

---

## Getting Started  

### Prerequisites  
Ensure you have the following installed locally:  
- A code editor (e.g., VS Code).  
- Git for version control.  

### Installation  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/your-username/belly-button-challenge.git  
   cd belly-button-challenge  
   ```  

2. **Open the Dashboard**  
   Open `index.html` in your browser to view the dashboard locally.  

3. **Push Changes**  
   Push changes to your GitHub repository:  
   ```bash  
   git add .  
   git commit -m "Add feature or fix"  
   git push origin main  
   ```  

4. **Deploy to GitHub Pages**  
   - Go to your repository settings.  
   - Enable GitHub Pages under the "Pages" section.  
   - Choose the `main` branch and save.  

---

## Technical Details  

### Libraries Used  
- **D3.js**: For reading JSON data and creating visualizations.  
- **HTML/CSS**: For structuring and styling the dashboard.  

### Dataset  
The dataset is hosted remotely at:  
[Dataset URL](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json)  

### Data Handling  
- Data is fetched dynamically using the **D3** library.  
- Charts are updated based on the selected sample ID from the dropdown menu.  

---

## Example Screenshots  

### Horizontal Bar Chart  
![Bar Chart Example](screenshots/bar_chart.png)  

### Bubble Chart  
![Bubble Chart Example](screenshots/bubble_chart.png)  

### Demographic Information Panel  
![Metadata Panel Example](screenshots/metadata_panel.png)  
