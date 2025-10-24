@echo off
echo --- Ejecutando Auditoria de Dependencias (safety) ---
safety check

echo.
echo --- Ejecutando Auditoria de Codigo Inseguro (bandit) ---
rem [CORRECCION V14] Usar ruta relativa explícita para excluir venv
bandit -r . -ll --exclude .\venv

echo.
echo --- Ejecutando Busqueda de Secretos (truffleHog) ---
rem [DESHABILITADO] Incompatible con dependencias seguras
rem .\venv\Scripts\trufflehog.exe filesystem --directory .
echo TruffleHog deshabilitado temporalmente debido a conflictos de dependencia.

echo.
echo --- Auditoria Completa ---
pause