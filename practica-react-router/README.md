# Curso de React Ruter

Checklist de tecnologías y conceptos aplicados en el proyecto de React Router

Uso de BrowserRouter, Routes y Route

Rutas públicas (/, /acerca, /contacto, /login)

Rutas protegidas (/dashboard con redirección a /login si no hay auth)

Rutas anidadas en Dashboard (usuarios, ajustes)

Navegación relativa con NavLink (ejemplo: to='usuarios' dentro de Dashboard)

Uso de <Outlet /> para renderizar subrutas anidadas

Redirección con <Navigate /> para proteger rutas

Rutas comodín * para página 404 personalizada

React Hooks y características
Estado con useState para manejo de autenticación

Hook useNavigate para redirección tras login/logout (implícito en el flujo)

Uso de React.lazy y Suspense para lazy loading en la página Contacto

Componentes y estructura
Componentes separados: Navbar, Dashboard, Usuarios, Ajustes, UsuarioDetalle, Login, Layout

Navbar con renderizado condicional (login/logout y enlaces según isAuth)

CSS para estilos activos con NavLink (className={({isActive}) => ...})

Uso de botones y eventos para logout

Testing (con Vitest y React Testing Library)
Tests unitarios y de integración para rutas y componentes

Verificación de enlaces href y textos renderizados

Testing de navegación y redirección condicional

Mocking de estado isAuth para probar rutas protegidas