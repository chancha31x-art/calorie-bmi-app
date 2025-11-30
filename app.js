// ข้อมูลเมนูอาหารตัวอย่าง 15+ รายการ
const defaultFoods = [
  { id: 1, name: 'ไข่ไก่ต้ม', calories: 155, unit: 'ฟอง' },
  { id: 2, name: 'ข้าวสวย', calories: 200, unit: 'จาน' },
  { id: 3, name: 'ไก่ย่างอกไก่', calories: 165, unit: 'ชิ้น' },
  { id: 4, name: 'ก๋วยเตี๋ยวเบื้องต้น', calories: 300, unit: 'ชาม' },
  { id: 5, name: 'หมูกรอบ', calories: 320, unit: 'ชิ้น' },
  { id: 6, name: 'ยำ', calories: 200, unit: 'จาน' },
  { id: 7, name: 'ส้มตำ', calories: 150, unit: 'จาน' },
  { id: 8, name: 'ไก่ทอด', calories: 260, unit: 'ชิ้น' },
  { id: 9, name: 'ปลาทอด', calories: 280, unit: 'ชิ้น' },
  { id: 10, name: 'หนึ่งในสาม', calories: 350, unit: 'ม้วน' },
  { id: 11, name: 'ข้าวขาหมู', calories: 450, unit: 'จาน' },
  { id: 12, name: 'พาสต้า', calories: 400, unit: 'จาน' },
  { id: 13, name: 'กาแฟ', calories: 50, unit: 'แก้ว' },
  { id: 14, name: 'น้ำส้มสด', calories: 100, unit: 'แก้ว' },
  { id: 15, name: 'นม', calories: 150, unit: 'แก้ว' },
  { id: 16, name: 'ปั้ง', calories: 250, unit: 'ชิ้น' },
  { id: 17, name: 'เค้ก', calories: 300, unit: 'ชิ้น' },
  { id: 18, name: 'ข้าวเหนียวมะม่วง', calories: 400, unit: 'ชาม' }
];

const mealTypes = ['มื้อเช้า', 'มื้อกลางวัน', 'มื้อเย็น', 'ของว่าง'];

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', () => {
  loadFoodsFromStorage();
  initializeSelects();
  displayFoods();
});

// ========== Initialize Dropdowns ==========
function initializeSelects() {
  const foodSelect = document.getElementById('foodSelect');
  const mealSelect = document.getElementById('mealType');

  // เพิ่มเมนูอาหาร
  getAllFoods().forEach(food => {
    const option = document.createElement('option');
    option.value = food.id;
    option.textContent = `${food.name} (${food.calories} kcal/${food.unit})`;
    foodSelect.appendChild(option);
  });

  // เพิ่มมื้ออาหาร
  mealTypes.forEach(meal => {
    const option = document.createElement('option');
    option.value = meal;
    option.textContent = meal;
    mealSelect.appendChild(option);
  });
}

// ========== Get All Foods ==========
function getAllFoods() {
  const customFoods = JSON.parse(localStorage.getItem('customFoods')) || [];
  return [...defaultFoods, ...customFoods];
}

// ========== BMI Calculation ==========
document.getElementById('bmi-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseFloat(document.getElementById('heightCm').value) / 100;
  const weight = parseFloat(document.getElementById('weightKg').value);
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const activityLevel = document.getElementById('activityLevel').value;

  // คำนวณ BMI
  const bmi = weight / (height * height);

  // จำแนก BMI
  let bmiCategory = '';
  if (bmi < 18.5) bmiCategory = 'ต่ำกว่าเกณฑ์';
  else if (bmi < 25) bmiCategory = 'ปกติ';
  else if (bmi < 30) bmiCategory = 'น้ำหนักเกิน';
  else if (bmi < 35) bmiCategory = 'อ้วนระดับ 1';
  else if (bmi < 40) bmiCategory = 'อ้วนระดับ 2';
  else bmiCategory = 'อ้วนระดับ 3';

  // คำนวณ BMR (Mifflin-St Jeor)
  let bmr;
  if (gender === 'male') {
    bmr = (10 * weight) + (6.25 * (height * 100)) - (5 * age) + 5;
  } else {
    bmr = (10 * weight) + (6.25 * (height * 100)) - (5 * age) - 161;
  }

  // Activity Factor
  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9
  };

  const tdee = Math.round(bmr * activityFactors[activityLevel]);

  // บันทึก localStorage
  const bmiData = {
    heightCm: document.getElementById('heightCm').value,
    weightKg: weight,
    age,
    gender,
    activityLevel,
    bmi: bmi.toFixed(1),
    bmiCategory,
    tdee,
    calculatedDate: new Date().toLocaleDateString('th-TH')
  };

  localStorage.setItem('bmiData', JSON.stringify(bmiData));

  // รีเซ็ต foodLog
  localStorage.removeItem('foodLog');
  displayFoods();

  // แสดงผลลัพธ์
  const resultDiv = document.getElementById('bmi-result');
  resultDiv.innerHTML = `
    <div class="bmi-info">
      <strong>📊 ผลการคำนวณ BMI</strong><br>
      BMI: ${bmi.toFixed(1)} (${bmiCategory})<br>
      BMR: ${bmr.toFixed(0)} kcal/วัน<br>
      <strong style="font-size: 1.3em; color: #2d7d4a;">
        แคลอรี่ที่ควรกิน: ${tdee} kcal/วัน
      </strong>
    </div>
  `;
});

// ========== Add Food Log ==========
document.getElementById('food-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const foodId = parseInt(document.getElementById('foodSelect').value);
  const quantity = parseFloat(document.getElementById('quantity').value);
  const mealType = document.getElementById('mealType').value;

  const food = getAllFoods().find(f => f.id === foodId);
  const totalCalories = food.calories * quantity;

  const foodLog = JSON.parse(localStorage.getItem('foodLog')) || [];
  foodLog.push({
    id: Date.now(),
    date: new Date().toLocaleDateString('th-TH'),
    mealType,
    foodName: food.name,
    quantity,
    caloriesPerUnit: food.calories,
    totalCalories: totalCalories.toFixed(0),
    unit: food.unit,
    time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
  });

  localStorage.setItem('foodLog', JSON.stringify(foodLog));
  displayFoods();

  // รีเซ็ท form
  document.getElementById('food-form').reset();
});

// ========== Display Foods ==========
function displayFoods() {
  const foodLog = JSON.parse(localStorage.getItem('foodLog')) || [];
  const tbody = document.querySelector('#food-table tbody');
  tbody.innerHTML = '';

  foodLog.forEach(log => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${log.mealType}</td>
      <td>${log.foodName}</td>
      <td>${log.quantity} ${log.unit}</td>
      <td>${log.caloriesPerUnit} kcal</td>
      <td><strong>${log.totalCalories} kcal</strong></td>
      <td><button class="btn-delete" onclick="deleteFood(${log.id})">❌ ลบ</button></td>
    `;
    tbody.appendChild(tr);
  });

  updateCalorieStatus();
}

// ========== Update Calorie Status ==========
function updateCalorieStatus() {
  const bmiData = JSON.parse(localStorage.getItem('bmiData'));
  const foodLog = JSON.parse(localStorage.getItem('foodLog')) || [];

  const totalCalories = foodLog.reduce((sum, log) => sum + parseFloat(log.totalCalories), 0);
  document.getElementById('total-calories').textContent = Math.round(totalCalories);

  const statusDiv = document.getElementById('calorie-status');

  if (!bmiData) {
    statusDiv.innerHTML = '<p style="text-align: center; color: #999;">กรุณาคำนวณ BMI ก่อน</p>';
    return;
  }

  const tdee = bmiData.tdee;
  const difference = tdee - totalCalories;

  let statusHTML = '';

  if (difference > 100) {
    statusHTML = `
      <div class="status-warning">
        ⚠️ ยังขาดแคลอรี่ ${Math.abs(difference)} kcal<br>
        (เป้าหมาย: ${tdee} kcal, ปัจจุบัน: ${Math.round(totalCalories)} kcal)
      </div>
    `;
  } else if (difference < -100) {
    statusHTML = `
      <div class="status-danger">
        🚫 เกินแคลอรี่ ${Math.abs(difference)} kcal<br>
        (เป้าหมาย: ${tdee} kcal, ปัจจุบัน: ${Math.round(totalCalories)} kcal)
      </div>
    `;
  } else {
    statusHTML = `
      <div class="status-good">
        ✅ ตรงกำหนด! ต่างเพียง ${Math.abs(difference)} kcal<br>
        (เป้าหมาย: ${tdee} kcal, ปัจจุบัน: ${Math.round(totalCalories)} kcal)
      </div>
    `;
  }

  statusDiv.innerHTML = statusHTML;
}

// ========== Add Custom Food ==========
function addCustomFood() {
  const name = document.getElementById('customFoodName').value.trim();
  const calories = parseFloat(document.getElementById('customFoodCalories').value);
  const unit = document.getElementById('customFoodUnit').value.trim();

  if (!name || !calories || !unit) {
    alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    return;
  }

  const customFoods = JSON.parse(localStorage.getItem('customFoods')) || [];
  const newId = Math.max(...defaultFoods.map(f => f.id), ...customFoods.map(f => f.id), 0) + 1;

  customFoods.push({ id: newId, name, calories, unit });
  localStorage.setItem('customFoods', JSON.stringify(customFoods));

  // อัปเดต dropdown
  const foodSelect = document.getElementById('foodSelect');
  const option = document.createElement('option');
  option.value = newId;
  option.textContent = `${name} (${calories} kcal/${unit})`;
  foodSelect.appendChild(option);
  foodSelect.value = newId;

  // รีเซ็ท form
  document.getElementById('customFoodName').value = '';
  document.getElementById('customFoodCalories').value = '';
  document.getElementById('customFoodUnit').value = '';

  alert(`✅ เพิ่มเมนู "${name}" สำเร็จ!`);
}

// ========== Delete Food ==========
function deleteFood(id) {
  if (confirm('ต้องการลบรายการนี้ใช่ไหม?')) {
    const foodLog = JSON.parse(localStorage.getItem('foodLog')) || [];
    const updatedLog = foodLog.filter(log => log.id !== id);
    localStorage.setItem('foodLog', JSON.stringify(updatedLog));
    displayFoods();
  }
}

// ========== Load Foods ==========
function loadFoodsFromStorage() {
  const storedFoods = JSON.parse(localStorage.getItem('customFoods')) || [];
  // ข้อมูลโหลดจาก storage แล้ว
}

// ========== Export Report ==========
function exportReport() {
  const bmiData = JSON.parse(localStorage.getItem('bmiData'));
  const foodLog = JSON.parse(localStorage.getItem('foodLog')) || [];

  if (!bmiData) {
    alert('กรุณาคำนวณ BMI ก่อน');
    return;
  }

  const totalCalories = foodLog.reduce((sum, log) => sum + parseFloat(log.totalCalories), 0);
  const difference = bmiData.tdee - totalCalories;

  let report = `
╔════════════════════════════════════════════════════════════════╗
║                  📊 รายงาน HealthHub                          ║
╚════════════════════════════════════════════════════════════════╝

📋 ข้อมูล BMI:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• วันที่คำนวณ: ${bmiData.calculatedDate}
• ส่วนสูง: ${bmiData.heightCm} ซม.
• น้ำหนัก: ${bmiData.weightKg} กก.
• อายุ: ${bmiData.age} ปี
• เพศ: ${bmiData.gender === 'male' ? 'ชาย' : 'หญิง'}
• ระดับกิจกรรม: ${bmiData.activityLevel}
• BMI: ${bmiData.bmi} (${bmiData.bmiCategory})
• แคลอรี่ที่ควรกิน: ${bmiData.tdee} kcal/วัน

🍽️ บันทึกอาหาร:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  if (foodLog.length === 0) {
    report += 'ยังไม่มีรายการอาหาร\n';
  } else {
    foodLog.forEach(log => {
      report += `• [${log.mealType}] ${log.foodName}: ${log.quantity} ${log.unit} = ${log.totalCalories} kcal\n`;
    });
  }

  report += `
📊 สรุปแคลอรี่:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• แคลอรี่รวม: ${Math.round(totalCalories)} kcal
• เป้าหมาย: ${bmiData.tdee} kcal
• ผลต่าง: ${difference > 0 ? 'ยังขาด' : 'เกิน'} ${Math.abs(difference)} kcal

สถานะ: ${
    difference > 100 ? '⚠️ ยังขาดแคลอรี่'
    : difference < -100 ? '🚫 เกินแคลอรี่'
    : '✅ ตรงกำหนด'
  }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
สร้างโดย HealthHub
วันที่: ${new Date().toLocaleDateString('th-TH')} เวลา ${new Date().toLocaleTimeString('th-TH')}
  `;

  alert(report);
  
  // Copy to clipboard
  navigator.clipboard.writeText(report).then(() => {
    console.log('✅ คัดลอกรายงานแล้ว');
  });
}