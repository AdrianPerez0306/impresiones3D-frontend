# Vm.automotivedesign Frontend

Este repositorio contiene el código del frontend desarrollado en **React** para el cliente **Vm.automotivedesign**, una empresa dedicada al diseño y fabricación de productos personalizados mediante impresión 3D.

## Propósito del Proyecto

El objetivo del proyecto es proporcionar a **Vm.automotivedesign** una plataforma web interactiva, moderna y funcional que permita a sus clientes explorar los productos disponibles, conocer más sobre la empresa y realizar compras en línea de forma sencilla y eficiente.

---

## Características Principales

1. **Página de Inicio**
   - Descripción del cliente, destacando su experiencia en impresión 3D y diseño personalizado.
   - Información sobre los servicios y valores de **Vm.automotivedesign**.

2. **Sección de Productos**
   - Catálogo interactivo de productos disponibles.
   - Filtros dinámicos para facilitar la navegación según categorías o materiales.

3. **Barra de Búsqueda**
   - Función de búsqueda rápida con sugerencias en tiempo real.
   - Permite encontrar productos por nombre o categoria.

4. **Carrito de Compras**
   - Visualización de los productos seleccionados con detalles como precio, cantidad y subtotal.
   - Funcionalidades para editar o eliminar artículos y proceder al pago.

5. **Diseño Responsivo**
   - Adaptación perfecta a cualquier dispositivo: móviles, tabletas y computadoras de escritorio.

---

## Tecnología Utilizada

- **Librerias**: React Typescript. Para evitar errores de compilacion en runtime. .
- **Estado Global**: Uso de react context API para logica de carrito, toast y categoria seleccionada, evitando prop drilling innecesario. Uso de callbacks y memos para evitar re-renderizados en funciones pasadas como props, y para evitar calculos pesados en re-renderizado de componentes.
- **Estilos**: Estilos CSS personalizados.
- **Consumo de APIs**: Axios para integrar datos dinámicos desde el backend.
- **Ruteo**: React Router DOM para una navegación fluida.
- **Testing**: Jest y React Testing Library para asegurar la calidad del código.

---

## Contribuciones

Este proyecto ha sido desarrollado por **Mandarina**, una empresa enfocada en crear soluciones digitales personalizadas y de alto impacto, en colaboración con el cliente **Vm.automotivedesign**.

---

## Instalación y Ejecución

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Mandarina/vm-automotivedesign-frontend.git

2. **Instalar dependencias**:
   ```bash
   npm install
   
3. **Ejecutar en desarrollo:
   ```bash
   npm start
   
4. **Generar build de producción**
   ```bash
   npm run build

## Licencia
El repositorio está protegido bajo una licencia privada y su uso está limitado exclusivamente al cliente Vm.automotivedesign.
works!