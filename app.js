// ─── Food Database (87 items) ─────────────────────────────────────────────────
const defaultFoods = [
  // ข้าว
  { id: 1,  name: 'ข้าวสวย',              calories: 200, unit: 'จาน',      cat: 'ข้าว' },
  { id: 2,  name: 'ข้าวต้ม',              calories: 120, unit: 'ถ้วย',     cat: 'ข้าว' },
  { id: 3,  name: 'ข้าวผัด',              calories: 400, unit: 'จาน',      cat: 'ข้าว' },
  { id: 4,  name: 'ข้าวมันไก่',           calories: 450, unit: 'จาน',      cat: 'ข้าว' },
  { id: 5,  name: 'ข้าวหมูแดง',           calories: 420, unit: 'จาน',      cat: 'ข้าว' },
  { id: 6,  name: 'ข้าวหน้าเป็ด',         calories: 480, unit: 'จาน',      cat: 'ข้าว' },
  { id: 7,  name: 'ข้าวขาหมู',            calories: 520, unit: 'จาน',      cat: 'ข้าว' },
  { id: 8,  name: 'ข้าวกะเพราไก่',         calories: 430, unit: 'จาน',      cat: 'ข้าว' },
  { id: 9,  name: 'ข้าวกะเพราหมู',         calories: 460, unit: 'จาน',      cat: 'ข้าว' },
  { id: 10, name: 'ข้าวแกงเขียวหวาน',      calories: 480, unit: 'จาน',      cat: 'ข้าว' },
  { id: 11, name: 'ข้าวแกงกะหรี่',          calories: 500, unit: 'จาน',      cat: 'ข้าว' },
  { id: 12, name: 'ข้าวแกงมัสมั่น',         calories: 550, unit: 'จาน',      cat: 'ข้าว' },
  { id: 13, name: 'ข้าวเหนียว',             calories: 170, unit: 'ปั้น',     cat: 'ข้าว' },
  { id: 14, name: 'ข้าวเหนียวมะม่วง',       calories: 400, unit: 'ชาม',      cat: 'ข้าว' },
  // เส้น
  { id: 15, name: 'ก๋วยเตี๋ยวน้ำ',          calories: 280, unit: 'ชาม',      cat: 'เส้น' },
  { id: 16, name: 'ก๋วยเตี๋ยวแห้ง',         calories: 320, unit: 'ชาม',      cat: 'เส้น' },
  { id: 17, name: 'บะหมี่หมูแดง',           calories: 350, unit: 'ชาม',      cat: 'เส้น' },
  { id: 18, name: 'ผัดไทย',                calories: 400, unit: 'จาน',      cat: 'เส้น' },
  { id: 19, name: 'ผัดซีอิ๊ว',              calories: 420, unit: 'จาน',      cat: 'เส้น' },
  { id: 20, name: 'ผัดขี้เมา',              calories: 450, unit: 'จาน',      cat: 'เส้น' },
  { id: 21, name: 'ราดหน้า',               calories: 380, unit: 'จาน',      cat: 'เส้น' },
  { id: 22, name: 'มาม่า',                 calories: 350, unit: 'ซอง',      cat: 'เส้น' },
  { id: 23, name: 'พาสต้าซอสมะเขือเทศ',    calories: 380, unit: 'จาน',      cat: 'เส้น' },
  { id: 24, name: 'สปาเก็ตตี้คาโบนาร่า',   calories: 520, unit: 'จาน',      cat: 'เส้น' },
  // ไก่
  { id: 25, name: 'ไก่ทอด',                calories: 260, unit: 'ชิ้น',     cat: 'โปรตีน' },
  { id: 26, name: 'อกไก่ย่าง',             calories: 165, unit: 'ชิ้น',     cat: 'โปรตีน' },
  { id: 27, name: 'ไก่ย่างขาน่อง',          calories: 200, unit: 'ชิ้น',     cat: 'โปรตีน' },
  { id: 28, name: 'ไก่อบซีอิ๊ว',            calories: 220, unit: 'ชิ้น',     cat: 'โปรตีน' },
  // หมู
  { id: 29, name: 'หมูปิ้ง',               calories: 120, unit: 'ไม้',       cat: 'โปรตีน' },
  { id: 30, name: 'หมูกรอบ',               calories: 320, unit: 'ชิ้น',     cat: 'โปรตีน' },
  { id: 31, name: 'หมูสามชั้นทอด',          calories: 400, unit: 'ชิ้น',     cat: 'โปรตีน' },
  { id: 32, name: 'ลูกชิ้นหมูทอด',          calories: 80,  unit: 'ลูก',      cat: 'โปรตีน' },
  // ปลา/ทะเล
  { id: 33, name: 'ปลาทอด',               calories: 280, unit: 'ชิ้น',     cat: 'โปรตีน' },
  { id: 34, name: 'ปลาเผา',               calories: 180, unit: 'ตัว',      cat: 'โปรตีน' },
  { id: 35, name: 'กุ้งทอด',              calories: 240, unit: 'ชิ้น',     cat: 'โปรตีน' },
  { id: 36, name: 'ปูผัดผงกะหรี่',          calories: 350, unit: 'จาน',      cat: 'โปรตีน' },
  { id: 37, name: 'ปลาหมึกย่าง',            calories: 180, unit: 'ตัว',      cat: 'โปรตีน' },
  // ไข่
  { id: 38, name: 'ไข่ไก่ต้ม',             calories: 77,  unit: 'ฟอง',      cat: 'โปรตีน' },
  { id: 39, name: 'ไข่เจียว',              calories: 180, unit: 'ฟอง',      cat: 'โปรตีน' },
  { id: 40, name: 'ไข่ดาว',               calories: 120, unit: 'ฟอง',      cat: 'โปรตีน' },
  { id: 41, name: 'ไข่ลวก',               calories: 70,  unit: 'ฟอง',      cat: 'โปรตีน' },
  // ผัก/สลัด
  { id: 42, name: 'ส้มตำ',                calories: 150, unit: 'จาน',      cat: 'ผัก' },
  { id: 43, name: 'ยำวุ้นเส้น',            calories: 200, unit: 'จาน',      cat: 'ผัก' },
  { id: 44, name: 'ยำมะม่วง',              calories: 160, unit: 'จาน',      cat: 'ผัก' },
  { id: 45, name: 'ผัดผักรวม',             calories: 150, unit: 'จาน',      cat: 'ผัก' },
  { id: 46, name: 'ผักบุ้งผัดน้ำมัน',       calories: 120, unit: 'จาน',      cat: 'ผัก' },
  { id: 47, name: 'สลัดผัก',              calories: 50,  unit: 'จาน',      cat: 'ผัก' },
  // แกง/ซุป
  { id: 48, name: 'ต้มยำกุ้ง',             calories: 180, unit: 'ถ้วย',     cat: 'แกง/ซุป' },
  { id: 49, name: 'ต้มข่าไก่',             calories: 200, unit: 'ถ้วย',     cat: 'แกง/ซุป' },
  { id: 50, name: 'แกงเขียวหวานไก่',        calories: 280, unit: 'ถ้วย',     cat: 'แกง/ซุป' },
  { id: 51, name: 'แกงมัสมั่นเนื้อ',         calories: 350, unit: 'ถ้วย',     cat: 'แกง/ซุป' },
  { id: 52, name: 'แกงจืดเต้าหู้',          calories: 100, unit: 'ถ้วย',     cat: 'แกง/ซุป' },
  { id: 53, name: 'ซุปไก่',               calories: 120, unit: 'ถ้วย',     cat: 'แกง/ซุป' },
  // ของว่าง
  { id: 54, name: 'ขนมปังปิ้งเนย',          calories: 250, unit: 'แผ่น',     cat: 'ของว่าง' },
  { id: 55, name: 'โดนัท',                 calories: 280, unit: 'ชิ้น',     cat: 'ของว่าง' },
  { id: 56, name: 'เค้กช็อกโกแลต',          calories: 320, unit: 'ชิ้น',     cat: 'ของว่าง' },
  { id: 57, name: 'มันฝรั่งทอด',            calories: 310, unit: 'ห่อ',       cat: 'ของว่าง' },
  { id: 58, name: 'ป๊อปคอร์น',             calories: 150, unit: 'ถ้วย',     cat: 'ของว่าง' },
  { id: 59, name: 'ซาลาเปา',              calories: 200, unit: 'ลูก',      cat: 'ของว่าง' },
  { id: 60, name: 'ปาท่องโก๋',             calories: 240, unit: 'แท่ง',     cat: 'ของว่าง' },
  { id: 61, name: 'ข้าวโพดคั่ว',            calories: 130, unit: 'ถ้วย',     cat: 'ของว่าง' },
  { id: 62, name: 'ลูกชุบ',               calories: 180, unit: 'ลูก',      cat: 'ของว่าง' },
  { id: 63, name: 'ทองหยิบ',              calories: 150, unit: 'ชิ้น',     cat: 'ของว่าง' },
  // ผลไม้
  { id: 64, name: 'กล้วย',                calories: 90,  unit: 'ลูก',      cat: 'ผลไม้' },
  { id: 65, name: 'แตงโม',                calories: 50,  unit: 'ชิ้น',     cat: 'ผลไม้' },
  { id: 66, name: 'มะม่วง',               calories: 100, unit: 'ลูก',      cat: 'ผลไม้' },
  { id: 67, name: 'สับปะรด',              calories: 80,  unit: 'ชิ้น',     cat: 'ผลไม้' },
  { id: 68, name: 'มังคุด',               calories: 70,  unit: 'ลูก',      cat: 'ผลไม้' },
  { id: 69, name: 'ทุเรียน',              calories: 350, unit: 'พู',        cat: 'ผลไม้' },
  { id: 70, name: 'แอปเปิล',              calories: 80,  unit: 'ลูก',      cat: 'ผลไม้' },
  { id: 71, name: 'องุ่น',                calories: 70,  unit: 'พวง',      cat: 'ผลไม้' },
  { id: 72, name: 'ส้ม',                  calories: 60,  unit: 'ลูก',      cat: 'ผลไม้' },
  { id: 73, name: 'ฝรั่ง',                calories: 55,  unit: 'ลูก',      cat: 'ผลไม้' },
  // เครื่องดื่ม
  { id: 74, name: 'กาแฟดำ',               calories: 5,   unit: 'แก้ว',     cat: 'เครื่องดื่ม' },
  { id: 75, name: 'กาแฟลาเต้',             calories: 150, unit: 'แก้ว',     cat: 'เครื่องดื่ม' },
  { id: 76, name: 'ชานมไข่มุก',            calories: 380, unit: 'แก้ว',     cat: 'เครื่องดื่ม' },
  { id: 77, name: 'น้ำส้มสด',              calories: 100, unit: 'แก้ว',     cat: 'เครื่องดื่ม' },
  { id: 78, name: 'น้ำมะพร้าว',            calories: 45,  unit: 'แก้ว',     cat: 'เครื่องดื่ม' },
  { id: 79, name: 'น้ำอ้อย',              calories: 180, unit: 'แก้ว',     cat: 'เครื่องดื่ม' },
  { id: 80, name: 'นม',                   calories: 150, unit: 'แก้ว',     cat: 'เครื่องดื่ม' },
  { id: 81, name: 'นมถั่วเหลือง',           calories: 130, unit: 'แก้ว',     cat: 'เครื่องดื่ม' },
  { id: 82, name: 'โอวัลติน',              calories: 200, unit: 'แก้ว',     cat: 'เครื่องดื่ม' },
  { id: 83, name: 'น้ำเปล่า',              calories: 0,   unit: 'แก้ว',     cat: 'เครื่องดื่ม' },
  { id: 84, name: 'โค้ก',                  calories: 140, unit: 'กระป๋อง',  cat: 'เครื่องดื่ม' },
  { id: 85, name: 'เบียร์',                calories: 150, unit: 'กระป๋อง',  cat: 'เครื่องดื่ม' },
  // Fast food
  { id: 86, name: 'แฮมเบอร์เกอร์',          calories: 450, unit: 'ชิ้น',     cat: 'Fast food' },
  { id: 87, name: 'พิซซ่า',                calories: 280, unit: 'แผ่น',     cat: 'Fast food' },
  { id: 88, name: 'เฟรนช์ฟรายส์',           calories: 360, unit: 'กล่อง',    cat: 'Fast food' },
  { id: 89, name: 'ชุดไก่ทอด 2 ชิ้น',       calories: 520, unit: 'ชุด',      cat: 'Fast food' },
  { id: 90, name: 'ซูชิ',                  calories: 40,  unit: 'คำ',       cat: 'Fast food' },
];

const mealTypes = ['มื้อเช้า', 'มื้อกลางวัน', 'มื้อเย็น', 'ของว่าง'];

// ─── State ───────────────────────────────────────────────────────────────────
let selectedFood    = null;
let searchFocusIdx  = -1;
let calorieChart    = null;
let weightChart     = null;

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setCurrentDate();
  initMealSelect();
  initSearch();
  initTabs();
  displayFoods();
  restoreBmiResult();
  setDefaultWeightDate();
});

function setCurrentDate() {
  const el = document.getElementById('current-date');
  if (el) el.textContent = new Date().toLocaleDateString('th-TH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function initMealSelect() {
  const sel = document.getElementById('mealType');
  mealTypes.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m; opt.textContent = m;
    sel.appendChild(opt);
  });
}

function getAllFoods() {
  const custom = JSON.parse(localStorage.getItem('customFoods')) || [];
  return [...defaultFoods, ...custom.map(f => ({ ...f, cat: f.cat || 'กำหนดเอง' }))];
}

// ─── Fuzzy Search ─────────────────────────────────────────────────────────────
function fuzzyScore(query, text) {
  const q = query.toLowerCase().trim();
  const t = text.toLowerCase();
  if (!q) return 1;
  if (t === q) return 100;
  if (t.startsWith(q)) return 90;
  if (t.includes(q)) return 70;
  let qi = 0, gaps = 0, last = -1;
  for (let i = 0; i < t.length && qi < q.length; i++) {
    if (t[i] === q[qi]) { if (last >= 0) gaps += (i - last - 1); last = i; qi++; }
  }
  if (qi < q.length) return 0;
  return Math.max(1, 50 - gaps * 3);
}

function searchFoods(query) {
  const all = getAllFoods();
  if (!query.trim()) return all.slice(0, 12);
  return all
    .map(f => ({ f, s: fuzzyScore(query, f.name) }))
    .filter(r => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .map(r => r.f)
    .slice(0, 9);
}

function highlightMatch(name, query) {
  if (!query.trim()) return name;
  const idx = name.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return name;
  return name.slice(0, idx) + '<mark>' + name.slice(idx, idx + query.length) + '</mark>' + name.slice(idx + query.length);
}

// ─── Search UI ────────────────────────────────────────────────────────────────
function initSearch() {
  const input    = document.getElementById('foodSearch');
  const dropdown = document.getElementById('searchDropdown');

  input.addEventListener('input', () => {
    searchFocusIdx = -1;
    const results = searchFoods(input.value);
    renderDropdown(results, input.value);
    const show = input.value.length > 0;
    dropdown.classList.toggle('open', show);
    input.setAttribute('aria-expanded', String(show));
  });

  input.addEventListener('focus', () => {
    const results = searchFoods(input.value);
    if (results.length > 0) { renderDropdown(results, input.value); dropdown.classList.add('open'); }
  });

  input.addEventListener('keydown', (e) => {
    const items = dropdown.querySelectorAll('.search-result-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      searchFocusIdx = Math.min(searchFocusIdx + 1, items.length - 1);
      updateFocusStyle(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      searchFocusIdx = Math.max(searchFocusIdx - 1, -1);
      updateFocusStyle(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (searchFocusIdx >= 0 && items[searchFocusIdx]) items[searchFocusIdx].click();
    } else if (e.key === 'Escape') {
      closeDropdown();
    }
  });

  document.addEventListener('click', (e) => {
    if (!document.getElementById('searchBox').contains(e.target)) closeDropdown();
  });
}

function updateFocusStyle(items) {
  items.forEach((item, i) => item.classList.toggle('focused', i === searchFocusIdx));
}

function renderDropdown(results, query) {
  const dropdown = document.getElementById('searchDropdown');
  if (results.length === 0 && query.trim()) {
    dropdown.innerHTML = '<div class="search-no-result">ไม่พบรายการที่ค้นหา</div>';
    return;
  }
  if (results.length === 0) { dropdown.innerHTML = ''; return; }
  dropdown.innerHTML = results.map(food => `
    <div class="search-result-item" onclick="selectFood(${food.id})" role="option" tabindex="-1">
      <span class="search-result-name">${highlightMatch(food.name, query)}</span>
      <div class="search-result-meta">
        <span class="search-result-cal">${food.calories} kcal/${food.unit}</span>
        <span class="search-result-cat">${food.cat}</span>
      </div>
    </div>
  `).join('');
}

function selectFood(id) {
  const food = getAllFoods().find(f => f.id === id);
  if (!food) return;
  selectedFood = food;
  document.getElementById('searchInputWrap').style.display = 'none';
  document.getElementById('searchSelected').style.display = 'flex';
  document.getElementById('searchSelectedName').textContent = food.name;
  document.getElementById('searchSelectedCal').textContent = `${food.calories} kcal / ${food.unit}`;
  closeDropdown();
}

function clearFoodSelection() {
  selectedFood = null;
  document.getElementById('searchInputWrap').style.display = '';
  document.getElementById('searchSelected').style.display = 'none';
  document.getElementById('foodSearch').value = '';
  document.getElementById('foodSearch').focus();
}

function closeDropdown() {
  document.getElementById('searchDropdown').classList.remove('open');
  document.getElementById('foodSearch').setAttribute('aria-expanded', 'false');
  searchFocusIdx = -1;
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
      if (btn.dataset.tab === 'progress') setTimeout(renderCharts, 80);
    });
  });
}

// ─── BMI Form ─────────────────────────────────────────────────────────────────
document.getElementById('bmi-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const height   = parseFloat(document.getElementById('heightCm').value) / 100;
  const weight   = parseFloat(document.getElementById('weightKg').value);
  const age      = parseInt(document.getElementById('age').value);
  const gender   = document.getElementById('gender').value;
  const activity = document.getElementById('activityLevel').value;

  const bmi = weight / (height * height);
  let bmiCategory = '', badgeClass = '';
  if      (bmi < 18.5) { bmiCategory = 'ต่ำกว่าเกณฑ์';  badgeClass = 'under'; }
  else if (bmi < 25)   { bmiCategory = 'ปกติ';           badgeClass = 'normal'; }
  else if (bmi < 30)   { bmiCategory = 'น้ำหนักเกิน';    badgeClass = 'over'; }
  else if (bmi < 35)   { bmiCategory = 'อ้วนระดับ 1';    badgeClass = 'over'; }
  else if (bmi < 40)   { bmiCategory = 'อ้วนระดับ 2';    badgeClass = 'over'; }
  else                 { bmiCategory = 'อ้วนระดับ 3';    badgeClass = 'over'; }

  const bmr = gender === 'male'
    ? (10 * weight) + (6.25 * (height * 100)) - (5 * age) + 5
    : (10 * weight) + (6.25 * (height * 100)) - (5 * age) - 161;

  const factors = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, veryActive: 1.9 };
  const tdee = Math.round(bmr * factors[activity]);

  const bmiData = {
    heightCm: document.getElementById('heightCm').value,
    weightKg: weight, age, gender, activity,
    bmi: bmi.toFixed(1), bmiCategory, badgeClass, bmr: Math.round(bmr), tdee,
    calculatedDate: new Date().toLocaleDateString('th-TH')
  };
  localStorage.setItem('bmiData', JSON.stringify(bmiData));

  saveCalorieHistory();
  localStorage.removeItem('foodLog');
  renderBmiResult(bmiData);
  displayFoods();
});

function renderBmiResult(d) {
  const el = document.getElementById('bmi-result');
  el.style.display = 'block';
  el.innerHTML = `
    <div class="bmi-result" style="display:block;">
      <div class="bmi-metrics">
        <div class="bmi-metric">
          <div class="bmi-metric-value">${d.bmi}</div>
          <div class="bmi-metric-label">BMI</div>
          <span class="bmi-badge ${d.badgeClass}">${d.bmiCategory}</span>
        </div>
        <div class="bmi-metric">
          <div class="bmi-metric-value">${Number(d.bmr).toLocaleString('th-TH')}</div>
          <div class="bmi-metric-label">BMR (kcal/วัน)</div>
        </div>
      </div>
      <div class="bmi-tdee">
        <div class="tdee-value">${Number(d.tdee).toLocaleString('th-TH')}</div>
        <div class="tdee-label">kcal/วัน ที่ควรบริโภค (TDEE)</div>
      </div>
    </div>
  `;
}

function restoreBmiResult() {
  const d = JSON.parse(localStorage.getItem('bmiData'));
  if (d) renderBmiResult(d);
}

// ─── Food Form ────────────────────────────────────────────────────────────────
document.getElementById('food-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (!selectedFood) {
    const box = document.getElementById('searchBox');
    box.classList.add('shake');
    setTimeout(() => box.classList.remove('shake'), 400);
    return;
  }
  const quantity = parseFloat(document.getElementById('quantity').value) || 1;
  const mealType = document.getElementById('mealType').value;
  const log = JSON.parse(localStorage.getItem('foodLog')) || [];
  log.push({
    id: Date.now(),
    date: new Date().toLocaleDateString('th-TH'),
    mealType,
    foodName: selectedFood.name,
    quantity,
    caloriesPerUnit: selectedFood.calories,
    totalCalories: (selectedFood.calories * quantity).toFixed(0),
    unit: selectedFood.unit,
  });
  localStorage.setItem('foodLog', JSON.stringify(log));
  clearFoodSelection();
  document.getElementById('quantity').value = '1';
  displayFoods();
});

// ─── Display & Status ─────────────────────────────────────────────────────────
function displayFoods() {
  const log   = JSON.parse(localStorage.getItem('foodLog')) || [];
  const tbody = document.querySelector('#food-table tbody');
  const empty = document.getElementById('table-empty');
  const wrap  = document.getElementById('table-wrap');

  tbody.innerHTML = '';
  if (log.length === 0) {
    wrap.style.display = 'none'; empty.classList.add('visible');
  } else {
    wrap.style.display = ''; empty.classList.remove('visible');
    log.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span class="meal-badge">${item.mealType}</span></td>
        <td>${item.foodName}</td>
        <td class="td-muted">${item.quantity} ${item.unit}</td>
        <td class="td-muted">${item.caloriesPerUnit}</td>
        <td class="td-strong">${item.totalCalories}</td>
        <td>
          <button class="btn-icon" onclick="deleteFood(${item.id})" aria-label="ลบรายการ">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
              <path d="M10 11v6"/><path d="M14 11v6"/>
            </svg>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }
  updateCalorieStatus();
  saveCalorieHistory();
}

function updateCalorieStatus() {
  const bmiData = JSON.parse(localStorage.getItem('bmiData'));
  const log     = JSON.parse(localStorage.getItem('foodLog')) || [];
  const total   = log.reduce((s, i) => s + parseFloat(i.totalCalories), 0);
  const rounded = Math.round(total);

  document.getElementById('total-calories').textContent = rounded.toLocaleString('th-TH');

  const statusEl  = document.getElementById('calorie-status');
  const barFill   = document.getElementById('calorie-bar-fill');
  const targetEl  = document.getElementById('cal-target-label');

  if (!bmiData) {
    statusEl.textContent = '';
    targetEl.textContent = 'กรุณาคำนวณ BMI ก่อน';
    barFill.style.width = '0%';
    barFill.className   = 'calorie-bar-fill';
    return;
  }

  const tdee = bmiData.tdee;
  const pct  = Math.min((total / tdee) * 100, 100);
  const diff = tdee - total;
  const absDiff = Math.round(Math.abs(diff));

  targetEl.textContent    = `เป้าหมาย ${Number(tdee).toLocaleString('th-TH')} kcal/วัน`;
  barFill.style.width     = pct.toFixed(1) + '%';
  statusEl.className      = 'calorie-status-text';

  if (diff > 100) {
    barFill.className = 'calorie-bar-fill warn';
    statusEl.classList.add('warn');
    statusEl.textContent = `ยังขาดอยู่ ${absDiff.toLocaleString('th-TH')} kcal`;
  } else if (diff < -100) {
    barFill.className = 'calorie-bar-fill over';
    statusEl.classList.add('danger');
    statusEl.textContent = `เกินเป้าหมาย ${absDiff.toLocaleString('th-TH')} kcal`;
  } else {
    barFill.className = 'calorie-bar-fill';
    statusEl.classList.add('good');
    statusEl.textContent = `ได้รับครบตามเป้าหมาย (ต่างเพียง ${absDiff} kcal)`;
  }
}

// ─── Custom Food ──────────────────────────────────────────────────────────────
function addCustomFood() {
  const name     = document.getElementById('customFoodName').value.trim();
  const calories = parseFloat(document.getElementById('customFoodCalories').value);
  const unit     = document.getElementById('customFoodUnit').value.trim();
  if (!name || isNaN(calories) || !unit) { alert('กรุณากรอกข้อมูลให้ครบทุกช่อง'); return; }
  const custom = JSON.parse(localStorage.getItem('customFoods')) || [];
  const newId  = Math.max(0, ...defaultFoods.map(f => f.id), ...custom.map(f => f.id)) + 1;
  custom.push({ id: newId, name, calories, unit, cat: 'กำหนดเอง' });
  localStorage.setItem('customFoods', JSON.stringify(custom));
  document.getElementById('customFoodName').value     = '';
  document.getElementById('customFoodCalories').value = '';
  document.getElementById('customFoodUnit').value     = '';
  alert(`เพิ่มเมนู "${name}" เรียบร้อยแล้ว`);
}

function deleteFood(id) {
  if (!confirm('ต้องการลบรายการนี้?')) return;
  const log = JSON.parse(localStorage.getItem('foodLog')) || [];
  localStorage.setItem('foodLog', JSON.stringify(log.filter(i => i.id !== id)));
  displayFoods();
}

// ─── Calorie History ──────────────────────────────────────────────────────────
function saveCalorieHistory() {
  const log = JSON.parse(localStorage.getItem('foodLog')) || [];
  if (log.length === 0) return;
  const total   = log.reduce((s, i) => s + parseFloat(i.totalCalories), 0);
  const today   = new Date().toLocaleDateString('th-TH');
  const history = JSON.parse(localStorage.getItem('calorieHistory')) || {};
  history[today] = Math.round(total);
  localStorage.setItem('calorieHistory', JSON.stringify(history));
}

// ─── Charts ───────────────────────────────────────────────────────────────────
function renderCharts() {
  renderCalorieChart();
  renderWeightChart();
  renderWeightTable();
}

function getLast7Days() {
  const history = JSON.parse(localStorage.getItem('calorieHistory')) || {};
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toLocaleDateString('th-TH');
    days.push({
      label: d.toLocaleDateString('th-TH', { weekday: 'short', day: 'numeric' }),
      calories: history[key] || 0,
      isToday: i === 0
    });
  }
  return days;
}

function renderCalorieChart() {
  const days    = getLast7Days();
  const hasData = days.some(d => d.calories > 0);
  const wrap    = document.getElementById('calorie-chart-wrap');
  const empty   = document.getElementById('calorie-chart-empty');

  if (!hasData) { wrap.style.display = 'none'; empty.style.display = 'flex'; return; }
  wrap.style.display = 'block'; empty.style.display = 'none';

  const bmiData = JSON.parse(localStorage.getItem('bmiData'));
  const tdee    = bmiData?.tdee || null;

  if (calorieChart) calorieChart.destroy();

  const datasets = [{
    label: 'แคลอรี่ที่บริโภค',
    data: days.map(d => d.calories),
    backgroundColor: days.map(d => d.isToday ? '#16a34a' : 'rgba(22,163,74,0.45)'),
    borderRadius: 6,
    borderSkipped: false,
    borderWidth: 0,
  }];

  if (tdee) {
    datasets.push({
      label: 'เป้าหมาย TDEE',
      type: 'line',
      data: days.map(() => tdee),
      borderColor: '#dc2626',
      borderDash: [5, 4],
      borderWidth: 1.5,
      pointRadius: 0,
      fill: false,
      tension: 0,
    });
  }

  const ctx = document.getElementById('calorie-chart').getContext('2d');
  calorieChart = new Chart(ctx, {
    type: 'bar',
    data: { labels: days.map(d => d.label), datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: 'index', intersect: false,
          callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y.toLocaleString('th-TH')} kcal` }
        }
      },
      scales: {
        x: {
          grid: { display: false }, border: { display: false },
          ticks: { font: { family: 'Outfit', size: 11 }, color: '#a09d97' }
        },
        y: {
          grid: { color: '#f0eeea', lineWidth: 1 }, border: { display: false },
          ticks: { font: { family: 'Outfit', size: 11 }, color: '#a09d97', callback: v => v.toLocaleString('th-TH') },
          beginAtZero: true,
        }
      }
    }
  });
}

// ─── Weight Log ───────────────────────────────────────────────────────────────
function setDefaultWeightDate() {
  const el = document.getElementById('weightDate');
  if (el) el.value = new Date().toISOString().split('T')[0];
}

function addWeightEntry() {
  const dateVal   = document.getElementById('weightDate').value;
  const weightVal = parseFloat(document.getElementById('weightValue').value);
  if (!dateVal || isNaN(weightVal) || weightVal < 20) { alert('กรุณากรอกวันที่และน้ำหนักให้ถูกต้อง'); return; }

  const log = JSON.parse(localStorage.getItem('weightLog')) || [];
  const dateObj = new Date(dateVal);
  log.push({
    id: Date.now(),
    dateISO: dateVal,
    date: dateObj.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' }),
    weight: weightVal,
  });
  log.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
  localStorage.setItem('weightLog', JSON.stringify(log));
  document.getElementById('weightValue').value = '';
  renderWeightChart();
  renderWeightTable();
}

function deleteWeight(id) {
  if (!confirm('ต้องการลบรายการนี้?')) return;
  const log = JSON.parse(localStorage.getItem('weightLog')) || [];
  localStorage.setItem('weightLog', JSON.stringify(log.filter(i => i.id !== id)));
  renderWeightChart();
  renderWeightTable();
}

function renderWeightChart() {
  const log   = JSON.parse(localStorage.getItem('weightLog')) || [];
  const wrap  = document.getElementById('weight-chart-wrap');
  const empty = document.getElementById('weight-chart-empty');

  if (log.length < 2) { wrap.style.display = 'none'; empty.style.display = 'flex'; return; }
  wrap.style.display = 'block'; empty.style.display = 'none';

  if (weightChart) weightChart.destroy();
  const ctx = document.getElementById('weight-chart').getContext('2d');
  weightChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: log.map(e => e.date),
      datasets: [{
        label: 'น้ำหนัก',
        data: log.map(e => e.weight),
        borderColor: '#1a1917',
        backgroundColor: 'rgba(26,25,23,0.04)',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#1a1917',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        tension: 0.3,
        fill: true,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: c => ` ${c.parsed.y} กก.` } }
      },
      scales: {
        x: {
          grid: { display: false }, border: { display: false },
          ticks: { font: { family: 'Outfit', size: 11 }, color: '#a09d97', maxRotation: 30 }
        },
        y: {
          grid: { color: '#f0eeea' }, border: { display: false },
          ticks: { font: { family: 'Outfit', size: 11 }, color: '#a09d97', callback: v => `${v} กก.` }
        }
      }
    }
  });
}

function renderWeightTable() {
  const log  = JSON.parse(localStorage.getItem('weightLog')) || [];
  const wrap = document.getElementById('weight-table-wrap');
  if (log.length === 0) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'block';

  const tbody  = document.querySelector('#weight-table tbody');
  tbody.innerHTML = '';
  const recent = [...log].reverse().slice(0, 10);

  recent.forEach((entry, idx) => {
    const prevIdx = log.length - 1 - idx - 1;
    const prev    = prevIdx >= 0 ? log[prevIdx] : null;
    let diffHTML  = '<span class="diff-zero">—</span>';
    if (prev) {
      const diff = (entry.weight - prev.weight).toFixed(1);
      if      (parseFloat(diff) > 0) diffHTML = `<span class="diff-pos">+${diff} กก.</span>`;
      else if (parseFloat(diff) < 0) diffHTML = `<span class="diff-neg">${diff} กก.</span>`;
      else                           diffHTML = `<span class="diff-zero">ไม่เปลี่ยน</span>`;
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${entry.date}</td>
      <td class="td-strong">${entry.weight} กก.</td>
      <td>${diffHTML}</td>
      <td>
        <button class="btn-icon" onclick="deleteWeight(${entry.id})" aria-label="ลบ">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6"/><path d="M14 11v6"/>
          </svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ─── Export ───────────────────────────────────────────────────────────────────
function exportReport() {
  const bmiData = JSON.parse(localStorage.getItem('bmiData'));
  const log     = JSON.parse(localStorage.getItem('foodLog')) || [];
  if (!bmiData) { alert('กรุณาคำนวณ BMI ก่อนส่งออกรายงาน'); return; }

  const total  = log.reduce((s, i) => s + parseFloat(i.totalCalories), 0);
  const diff   = bmiData.tdee - total;
  const status = diff > 100 ? 'ยังขาดแคลอรี่' : diff < -100 ? 'เกินเป้าหมาย' : 'ได้รับครบตามเป้าหมาย';

  let report = `
═══════════════════════════════════════════
  รายงาน HealthHub
═══════════════════════════════════════════

ข้อมูล BMI
───────────────────────────────────────────
วันที่คำนวณ  : ${bmiData.calculatedDate}
ส่วนสูง      : ${bmiData.heightCm} ซม.
น้ำหนัก      : ${bmiData.weightKg} กก.
อายุ         : ${bmiData.age} ปี
เพศ          : ${bmiData.gender === 'male' ? 'ชาย' : 'หญิง'}
BMI          : ${bmiData.bmi}  (${bmiData.bmiCategory})
BMR          : ${Number(bmiData.bmr).toLocaleString('th-TH')} kcal/วัน
TDEE         : ${Number(bmiData.tdee).toLocaleString('th-TH')} kcal/วัน

รายการอาหาร
───────────────────────────────────────────
`;

  if (log.length === 0) {
    report += 'ยังไม่มีรายการอาหาร\n';
  } else {
    log.forEach(i => { report += `[${i.mealType}]  ${i.foodName}  ${i.quantity} ${i.unit}  =  ${i.totalCalories} kcal\n`; });
  }

  report += `
สรุป
───────────────────────────────────────────
แคลอรี่รวม   : ${Math.round(total).toLocaleString('th-TH')} kcal
เป้าหมาย     : ${Number(bmiData.tdee).toLocaleString('th-TH')} kcal
ผลต่าง       : ${Math.abs(Math.round(diff)).toLocaleString('th-TH')} kcal (${diff > 0 ? 'ยังขาด' : diff < 0 ? 'เกิน' : 'ตรงเป้า'})
สถานะ        : ${status}

สร้างโดย HealthHub — ${new Date().toLocaleDateString('th-TH')} ${new Date().toLocaleTimeString('th-TH')}
═══════════════════════════════════════════
`;

  navigator.clipboard.writeText(report)
    .then(() => alert('คัดลอกรายงานไปยังคลิปบอร์ดแล้ว'))
    .catch(() => alert(report));
}
