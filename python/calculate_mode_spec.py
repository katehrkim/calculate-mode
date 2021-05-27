# Write your own unit tests here!
import unittest
from calculate_mode import calculate_mode

class CalculateModeTestCase(unittest.TestCase):
    """Tests for calculate_mode.py"""
    def test_one(self):
        self.assertEqual(calculate_mode([1,2,3,3]), [3])
    def test_two(self):
        self.assertEqual(calculate_mode([4.5, 0, 0]), [0])
    def test_three(self):
        self.assertEqual(calculate_mode([1.5, -1, 1, 1.5]), [1.5])
    def test_four(self):
        self.assertEqual(calculate_mode([1,1,2,2]), [1,2])
    def test_five(self):
        self.assertEqual(calculate_mode([1,2,3]), [1,2,3])
    def test_six(self):
        self.assertEqual(calculate_mode(["who", "what", "where", "who"]), ["who"])
    

if __name__ == '__main__':
    unittest.main()