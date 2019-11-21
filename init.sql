CREATE TABLE motor_data (
  id SERIAL PRIMARY KEY,
  electric_current_a NUMERIC,
  electric_current_b NUMERIC,
  electric_current_c NUMERIC,
  read_data TIMESTAMP
);

INSERT INTO motor_data (electric_current_a, electric_current_b, electric_current_c, read_data) VALUES
  (0.42, 1.11, 1.02, '9/12/17 0:00'),
  (0.41, 1.07, 1.03, '9/12/17 0:00' );
