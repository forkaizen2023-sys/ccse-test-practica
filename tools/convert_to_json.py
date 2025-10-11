import os
import json

# --- CONFIGURACIÓN ---
# Lista de los archivos JS que quieres convertir.
# Puedes añadir más nombres de archivo aquí en el futuro.
input_files = [
    'questions-es.js',
    'questions-uk.js',
    'questions-additional.js'
]

# Nombre de la carpeta donde se guardarán los nuevos archivos JSON.
output_folder = 'data'

# --- LÓGICA DEL SCRIPT ---

def convert_js_to_json():
    """
    Función principal que orquesta el proceso de conversión.
    """
    print("Iniciando la herramienta de conversión de JS a JSON...")

    # 1. Crear la carpeta de destino si no existe.
    # Usar exist_ok=True evita errores si la carpeta ya ha sido creada.
    try:
        os.makedirs(output_folder, exist_ok=True)
        print(f"Directorio de salida '{output_folder}' asegurado.")
    except OSError as e:
        print(f"Error CRÍTICO: No se pudo crear el directorio '{output_folder}': {e}")
        return # Detenemos la ejecución si no podemos crear la carpeta.

    # 2. Procesar cada archivo de la lista de entrada.
    for filename in input_files:
        try:
            print(f"\nProcesando archivo: '{filename}'...")
            
            # Construir la ruta completa del archivo de entrada.
            input_path = os.path.join('.', filename) # Asumimos que está en la misma carpeta.

            # Leer el contenido del archivo JavaScript.
            with open(input_path, 'r', encoding='utf-8') as f:
                js_content = f.read()

            # 3. Limpiar el contenido para aislar el objeto JSON.
            # Esta es la parte clave: eliminamos el código JavaScript sobrante.
            # Cuidado: Un error oculto común es hacer esto con métodos frágiles.
            # Este enfoque es robusto para el formato actual.
            if 'const quizData = ' not in js_content:
                print(f"  -> ADVERTENCIA: No se encontró 'const quizData =' en {filename}. Saltando archivo.")
                continue

            # Eliminamos el prefijo y el punto y coma final.
            json_str = js_content.replace('const quizData =', '').strip().rstrip(';')

            # 4. Convertir la cadena de texto a un objeto Python (diccionario).
            data = json.loads(json_str)

            # 5. Construir el nombre del archivo de salida.
            # Ej: 'questions-es.js' -> 'es.json'
            base_name = filename.replace('questions-', '').replace('.js', '')
            output_filename = f"{base_name}.json"
            output_path = os.path.join(output_folder, output_filename)

            # 6. Guardar el objeto Python como un archivo JSON formateado.
            # ensure_ascii=False es VITAL para guardar correctamente caracteres
            # como los del ucraniano (кирилиця).
            # indent=4 formatea el JSON para que sea legible por humanos.
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            
            print(f"  -> ¡ÉXITO! Archivo guardado como '{output_path}'")

        except FileNotFoundError:
            print(f"  -> ERROR: No se encontró el archivo '{filename}'. Asegúrate de que esté en la misma carpeta que el script.")
        except json.JSONDecodeError:
            print(f"  -> ERROR: El contenido de '{filename}' no es un JSON válido después de la limpieza. Revisa su sintaxis.")
        except Exception as e:
            # Captura de cualquier otro error inesperado.
            print(f"  -> ERROR INESPERADO al procesar '{filename}': {e}")

    print("\nProceso de conversión finalizado.")


# --- EJECUCIÓN ---
if __name__ == "__main__":
    convert_js_to_json()