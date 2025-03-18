# موقع البنك - صفحة تحت الصيانة | Bank Website - Maintenance Page

هذا مشروع بسيط لموقع بنك يعرض صفحة "تحت الصيانة" مع تأثيرات بصرية جذابة.

This is a simple bank website project displaying a "Under Maintenance" page with attractive visual effects.

## الميزات | Features

- تصميم متجاوب يعمل على جميع أحجام الشاشات | Responsive design that works on all screen sizes
- تأثير تدرج لوني متغير مع حركة الماوس | Color gradient effect that changes with mouse movement
- تأثيرات حركية احترافية | Professional animation effects
- واجهة مستخدم بسيطة وأنيقة | Simple and elegant user interface
- دعم الوضع المظلم | Dark mode support
- دعم اللغة العربية والإنجليزية | Arabic and English language support
- تصميم عصري | Modern design

## التقنيات المستخدمة | Technologies Used

- React.js
- CSS3 (تأثيرات متقدمة | advanced effects)
- React Icons
- React Context API (للوضع المظلم واللغة | for dark mode and language)

## كيفية تشغيل المشروع | How to Run the Project

1. تأكد من تثبيت Node.js على جهازك | Make sure Node.js is installed on your device
2. قم بتثبيت الاعتماديات | Install dependencies:
   ```
   npm install
   ```
3. قم بتشغيل المشروع | Run the project:
   ```
   npm start
   ```
4. افتح المتصفح على العنوان | Open browser at: `http://localhost:3000`

## هيكل المشروع | Project Structure

- `src/components/Header.jsx` - مكون رأس الصفحة | Header component
- `src/components/MaintenanceBody.jsx` - مكون جسم الصفحة مع رسالة الصيانة | Body component with maintenance message
- `src/components/Footer.jsx` - مكون تذييل الصفحة | Footer component
- `src/context/AppContext.js` - سياق التطبيق لإدارة الوضع المظلم واللغة | App context for managing dark mode and language
- `src/translations.js` - ملف الترجمة | Translation file
- `src/App.js` - المكون الرئيسي للتطبيق | Main app component

## التخصيص | Customization

يمكنك تخصيص الألوان والخطوط والتأثيرات بسهولة من خلال تعديل ملفات CSS وملف index.css الذي يحتوي على متغيرات CSS.

You can easily customize colors, fonts, and effects by modifying the CSS files and the index.css file which contains CSS variables. 