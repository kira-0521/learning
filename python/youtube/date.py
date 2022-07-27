from datetime import date

d_today = date.today()
print(d_today)
new_years_day = date(d_today.year + 1, 1, 1)
print(new_years_day)
diff_date = new_years_day - d_today
print(diff_date.days)