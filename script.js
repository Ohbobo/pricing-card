import { planDescription } from "./src/js/card-content.js";

const planButtons = document.querySelectorAll('.select-plan_btn');
const cardContent = document.querySelector('.card-content');

function init() {
    getActiveButtonByIndex(1)
}
init()

function getActiveButtonByIndex(index) {
    planButtons.forEach(btn => btn.classList.remove('active'))
    planButtons[index].classList.add("active")
    const plan = filterPlan(planDescription, index);
    displayCardContent(plan)
}

function filterPlan(arr, index) {
    return[arr[index]]
}

function createElement(element) {
    return document.createElement(element)
}

function displayCardContent(arr) {
    cardContent.innerText = ""
    arr.forEach(element => {
        const tag = createElement('span');
        const priceDiv = createElement('div')
        const title = createElement('h3')
        const price = createElement('p')
        const description = createElement('p')
        const iconDiv = createElement('div');
        

        priceDiv.className = "price-div"
        iconDiv.className = "icon-div"
        


        tag.innerText = element.tag;
        title.innerText = element.title;
        price.innerText = element.price;
        description.innerText = element.description;

        element.iconSection.forEach(el => {
            const sectionIconDiv = createElement('div');
            const icon = createElement('i')
            const textIcon = createElement('p')
            icon.className = el.icon;
            sectionIconDiv.className = "section-icon-div";
            textIcon.innerText = el.text;
            sectionIconDiv.append(icon, textIcon)
            iconDiv.append(sectionIconDiv)
        })
        
        priceDiv.append(title, price)
        
        cardContent.append(tag, priceDiv, description, iconDiv);
    })
}

planButtons.forEach((btn, i) => btn.addEventListener('click', () => getActiveButtonByIndex(i)));


// class PlanModel {
//     constructor() {
//         this.plans = [
//             {
//                 tag: "Basic",
//                 title: "Icon Sets",
//                 price: "$60",
//                 description: "Up to 50 creative & professional icons + one color versions/themes",
//             },
//             {
//                 tag: "Standard",
//                 title: "Icon Sets",
//                 price: "$120",
//                 description: "Up to 100 creative & professional icons + two color versions/themes",
//             },
//             {
//                 tag: "Premium",
//                 title: "Icon Sets",
//                 price: "$180",
//                 description: "Up to 200 creative & professional icons + four color versions/themes",
//             }
//         ];
//     }

//     getPlan(index) {
//         return this.plans[index];
//     }
// }


// class PlanViewModel {
//     constructor(model) {
//         this.model = model;
//         this.selectedPlanIndex = 0;
//     }

//     getPlan() {
//         return this.model.getPlan(this.selectedPlanIndex);
//     }

//     selectPlan(index) {
//         this.selectedPlanIndex = index;
//         this.onPlanChanged(); // Informer la vue qu'un changement s'est produit
//     }

//     bindPlanChanged(callback) {
//         this.onPlanChanged = callback; // Lier une fonction de mise à jour
//     }

//     init() {
//         this.selectPlan(1); // Sélection par défaut du premier plan
//     }
// }


// class PlanView {
//     constructor(viewModel) {
//         this.viewModel = viewModel;
//         this.planButtons = document.querySelectorAll('.select-plan_btn');
//         this.cardContent = document.querySelector('.card-content');
//     }

//     render() {
//         this.clearCardContent();
        
//         const plan = this.viewModel.getPlan();
//         const tag = document.createElement('span');
//         const priceDiv = document.createElement('div');
//         const title = document.createElement('h3');
//         const price = document.createElement('p');
//         const description = document.createElement('p');

//         priceDiv.className = "price-div";

//         tag.innerText = plan.tag;
//         title.innerText = plan.title;
//         price.innerText = plan.price;
//         description.innerText = plan.description;

//         priceDiv.append(title, price);
//         this.cardContent.append(tag, priceDiv, description);

//         this.highlightActiveButton(this.viewModel.selectedPlanIndex);
//     }

//     clearCardContent() {
//         this.cardContent.innerHTML = "";
//     }

//     highlightActiveButton(index) {
//         this.planButtons.forEach(btn => btn.classList.remove('active'));
//         this.planButtons[index].classList.add('active');
//     }

//     bindEvents() {
//         this.planButtons.forEach((btn, index) => {
//             btn.addEventListener('click', () => this.viewModel.selectPlan(index));
//         });
//     }
// }


// const app = () => {
//     const model = new PlanModel();
//     const viewModel = new PlanViewModel(model);
//     const view = new PlanView(viewModel);

//     viewModel.bindPlanChanged(() => view.render());
//     viewModel.init();
//     view.bindEvents();
// }

// app();