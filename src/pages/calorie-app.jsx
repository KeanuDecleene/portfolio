import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CalorieApp({ darkMode, onBack }) {
  const [form, setForm] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "male",
    activity: "sedentary",
  });

  const [result, setResult] = useState(null);

  const activityLevels = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
  };

  const primaryBtn = darkMode
    ? "btn btn-light text-dark border-light"
    : "btn btn-dark";
  const secondaryBtn = darkMode
    ? "btn btn-outline-light"
    : "btn btn-outline-dark";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { age, weight, height, gender, activity } = form;

    if (!age || !weight || !height) {
      alert("Please fill in all fields");
      return;
    }

    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const multiplier = activityLevels[activity] || 1.2;
    const maintenanceCalories = Math.round(bmr * multiplier);

    setResult({
      bmr: Math.round(bmr),
      maintenanceCalories,
    });
  };

  return (
    <motion.section
      className="py-4 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="mb-4">Calorie Maintenance Calculator</h1>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="card shadow rounded-4 border-0"
      >
        <div className="card-body p-4">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={form.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Weight (kg)</label>
              <input
                type="number"
                className="form-control"
                name="weight"
                value={form.weight}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Height (cm)</label>
              <input
                type="number"
                className="form-control"
                name="height"
                value={form.height}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                name="gender"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Activity Level</label>
              <select
                className="form-select"
                name="activity"
                value={form.activity}
                onChange={handleChange}
              >
                <option value="sedentary">Sedentary</option>
                <option value="light">Lightly Active</option>
                <option value="moderate">Moderately Active</option>
                <option value="active">Active</option>
                <option value="very_active">Very Active</option>
              </select>
            </div>

            <div className="d-flex gap-2 flex-wrap">
              <button type="submit" className={primaryBtn}>
                Calculate
              </button>

              <button type="button" className={secondaryBtn} onClick={onBack}>
                &larr; Back to Portfolio
              </button>
            </div>
          </form>

          {result && (
            <div
              className={`card border-0 rounded-4 mt-3 ${
                darkMode ? "bg-dark text-light" : "bg-light"
              }`}
            >
              <div className="card-body">
                <p className="mb-2">
                  <strong>BMR:</strong> {result.bmr} kcal/day
                </p>
                <p className="mb-0">
                  <strong>Maintenance Calories:</strong>{" "}
                  {result.maintenanceCalories} kcal/day
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}
